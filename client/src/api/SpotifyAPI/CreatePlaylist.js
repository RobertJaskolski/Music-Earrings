import { LogoutUser, optionsPOST } from "../../utils/ApiUtils";
import axios from "axios";

const CreatePlaylist = () => async (dispatch, getState) => {
  const { filtrsGeneratePlaylist, userInfo, tokens, responses } = getState();
  const optionsAxios = optionsPOST(
    `/v1/users/${userInfo["data"].id}/playlists`,
    tokens["accessToken"],
    {
      name: filtrsGeneratePlaylist["tracklistName"],
      description: "Playlist created by Music Earrings",
      public: true,
    }
  );
  await axios(optionsAxios)
    .then((response) => {
      if (response.status === 201 || response.status === 200) {
        let query = "";
        responses?.recommendedTracklist["tracklist"]?.map((track) => {
          query += track.uri + ",";
          return track;
        });
        query = query.slice(0, -1);
        const optionsAxios = optionsPOST(
          `/v1/playlists/${response.data.id}/tracks?uris=${query}`,
          tokens["accessToken"],
          {}
        );
        axios(optionsAxios)
          .then((response) => {
            if (response.status === 201 || response.status === 200) {
            } else {
              LogoutUser(dispatch);
              return undefined;
            }
          })
          .catch((err) => {
            LogoutUser(dispatch);
            return undefined;
          });
      } else {
        LogoutUser(dispatch);
        return undefined;
      }
    })
    .catch((err) => {
      LogoutUser(dispatch);
      return undefined;
    });
};

export default CreatePlaylist;
