import instanceAuth, { setToken } from "./Instance";

async function GetUserProfile() {
  setToken();
  await instanceAuth
    .get("/v1/me")
    .then((response) => {
      if (response.statusText === "OK") {
        return response.data;
      } else return undefined;
    })
    .catch((err) => {
      console.log(err);
    });
}

export default GetUserProfile;
