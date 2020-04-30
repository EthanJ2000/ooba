import { AsyncStorage } from "react-native";
// import { Facebook } from "expo";
import * as Facebook from "expo-facebook";
import { FACEBOOK_LOGIN_SUCCESS } from "./types";
import { FACEBOOK_LOGIN_FAIL } from "./types";

export const facebookLogin = () => async (dispatch) => {
  console.log("called");
  let token = await AsyncStorage.getItem("fb_token");
  if (token) {
    //login is done
    console.log("here");
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    //start login
    Facebook.initializeAsync("244980370179451");
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async (dispatch) => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync(
    "244980370179451",
    {
      permissions: ["public_profile"],
    }
  );

  if (type === "cancel") {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem("fb_token", token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
