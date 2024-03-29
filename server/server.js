const express = require("express"); // Express web server framework
const request = require("request"); // "Request" library
const cors = require("cors");
const querystring = require("querystring");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const client_id = process.env.CLIENT_ID; // Your client id
const client_secret = process.env.CLIENT_SECRET; // Your secret
const redirect_uri = process.env.REDIRECT_URI; // Your redirect uri
/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = function (length) {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const stateKey = "spotify_auth_state";

const app = express();

const corsOptions = {
  origin: "https://music-earrings.herokuapp.com",
  methods: "GET,POST",
};

app
  .use(express.static(__dirname + "/public"))
  .use(cors())
  .use(cookieParser());

app.get("/login", function (req, res) {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  const scope =
    "user-read-private user-library-read user-read-playback-state user-read-email user-library-modify user-top-read playlist-modify-public playlist-modify-private playlist-read-private user-modify-playback-state streaming";
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});

app.post("/notifications", function (req, res) {
  console.log(req, res);
});

app.get("/callback", function (req, res) {
  // your application requests refresh and access tokens
  // after checking the state parameter

  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    res.clearCookie(stateKey);
    const authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      },
      headers: {
        Authorization:
          "Basic " +
          new Buffer(client_id + ":" + client_secret).toString("base64"),
      },
      json: true,
    };

    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        const { access_token, refresh_token } = body;

        const react_url = process.env.REACT_APP_URL || "http://localhost:3000/";

        res.redirect(
          `${react_url}#` +
            querystring.stringify({
              access_token: access_token,
              refresh_token: refresh_token,
            })
        );
      } else {
        res.redirect(
          "/#" +
            querystring.stringify({
              error: "invalid_token",
            })
        );
      }
    });
  }
});

app.get("/refresh_token", function (req, res) {
  // requesting access token from refresh token
  const refresh_token = req.query.refresh_token;
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token;

      res.send({
        access_token: access_token,
      });
    } else {
      res.status(401).send("Invald Token");
    }
  });
});

app.get("/ArtistsAndTracks", function (req, res) {
  const search = req.query.search;
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      grant_type: "client_credentials",
    },
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const { access_token } = body;
      request.get(
        {
          url: `https://api.spotify.com/v1/search?q=${search}&type=track%2Cartist&limit=10`,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        },
        function (error, response, body) {
          if (!error && response.statusCode === 200) {
            res.status(200).send(body);
          } else {
            res.status(401).send({ body: "Bad token" });
          }
        }
      );
    } else {
      res.status(400).send({ body: "Bad request" });
    }
  });
});

app.get("/Recommendations", function (req, res) {
  const limit = req.query.limit;
  const min_danceability = req.query.min_danceability;
  const max_danceability = req.query.max_danceability;
  const min_energy = req.query.min_energy;
  const max_energy = req.query.max_energy;
  const min_popularity = req.query.min_popularity;
  const max_popularity = req.query.max_popularity;
  const seed_artists = req.query.seed_artists;
  const seed_tracks = req.query.seed_tracks;
  const filters = `limit=${limit}&min_popularity=${min_popularity}&max_popularity=${max_popularity}&min_energy=${min_energy}&max_energy=${max_energy}&min_danceability=${min_danceability}&max_danceability=${max_danceability}`;
  let seed = "";
  if (seed_artists) {
    seed += `&seed_artists=${seed_artists}`;
  }
  if (seed_tracks) {
    seed += `&seed_tracks=${seed_tracks}`;
  }

  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      grant_type: "client_credentials",
    },
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const { access_token } = body;
      request.get(
        {
          url: `https://api.spotify.com/v1/recommendations?${filters}${seed}`,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        },
        function (error, response, body) {
          if (!error && response.statusCode === 200) {
            res.status(200).send(body);
          } else {
            console.log(body);
            res.status(401).send({ body: "Bad token" });
          }
        }
      );
    } else {
      res.status(400).send({ body: "Bad request" });
    }
  });
});

app.listen(process.env.PORT || 4000);
