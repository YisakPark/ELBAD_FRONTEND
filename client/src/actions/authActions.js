import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { clearErrors } from "./errorActions";
import BackEndServerAddress from "../components/common/BackEndServerAddress";
import { GET_ERRORS, SET_CURRENT_USER, GET_CURRENT_USER } from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  dispatch(clearErrors());
  console.log(userData);
  axios
    .post(BackEndServerAddress + "/api/users/register", userData)
    .then(res => {
      history.push("/login");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post(BackEndServerAddress + "/api/users/login", userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

// Edit user info
export const editUser = (userData, history) => dispatch => {
  axios
    .put(BackEndServerAddress + "/api/users/edit_user", userData)
    .then(res => {
      logoutUser();
      //get updated token
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      history.push("/");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Get user info
export const getUser = () => dispatch => {
  dispatch(clearErrors());
  axios
    .get(BackEndServerAddress + "/api/users/current")
    .then(res =>
      dispatch({
        type: GET_CURRENT_USER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CURRENT_USER,
        payload: null
      })
    );
};

export const getPhoto = () => dispatch => {
  dispatch(clearErrors());
  axios
    .get(BackEndServerAddress + "/api/posts/getPhoto", {
      responseType: "arraybuffer"
    })
    .then(
      res => {
        const a = new Buffer(res.data, "binary").toString("base64");
        dispatch({
          type: GET_CURRENT_USER,
          payload: a
        });
      }
      /*      dispatch({
        type: GET_CURRENT_USER,
        payload: res.data
      })
      */
    )
    .catch(err =>
      dispatch({
        type: GET_CURRENT_USER,
        payload: null
      })
    );
};

// Login - Get User Token
export const verifyEmail = (code, history) => dispatch => {
  axios
    .post(BackEndServerAddress + "/api/users/verification", code)
    .then(res => {
      logoutUser();
      //get updated token
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      history.push({
        pathname: "/",
        state: { show_verified_info: true }
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
