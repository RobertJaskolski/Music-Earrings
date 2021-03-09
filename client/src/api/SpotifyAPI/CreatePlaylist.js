import { LogoutUser, optionsPOST } from "../../utils/ApiUtils";
import axios from "axios";

const CreatePlaylist = () => async (dispatch, getState) => {
  const { filtrsGeneratePlaylist, userInfo, tokens } = getState();
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
      if (response.status === 201) {
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
