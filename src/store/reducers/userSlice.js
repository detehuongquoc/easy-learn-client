import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "./constant";
import setAuthToken from "../../utils/setAuthenToken";
//Reducer thunk
// fetch API getAllProduct
// Authenticate user
export const loadUser = createAsyncThunk("loadUser", async () => {
  try {
    const response = await axios.get(`${apiUrl}/auth`);
    return response.data;
  } catch (error) {
    if (error.response.data) return error.response.data;
    else return { success: false, message: error.message };
  }
});
export const loginUser = createAsyncThunk(
  "login/loginuser",
  async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, userForm);
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  }
);
export const registerUser = createAsyncThunk(
  "register/newregister",
  async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, userForm);
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    accessToken: "",
    user: {},
    authLoading: true,
    isAuthenticated: false,
  },
  reducers: {
    // IsLogin(state, action) {
    //   state.user = action.payload;
    // },
    // IsLogout(state, action) {
    //   state.user = {};
    // },
    logoutUser(state, action) {
      state.isAuthenticated = false;
      state.user = {};
      state.accessToken = "";
    },
  },
  extraReducers: {
    // check user
    [loadUser.pending]: (state, action) => {
      state.authLoading = true;
    },
    [loadUser.fulfilled]: (state, action) => {
      console.log("Done");
      console.log(action.payload);
      if (action.payload.success) {
        state.isAuthenticated = true;
        state.authLoading = false;
        state.user = action.payload;
      } else {
        state.isAuthenticated = false;
        state.authLoading = false;
        state.user = {};
      }
    },
    [loadUser.rejected]: (state, action) => {
      state.isAuthenticated = false;
      state.user = {};
    },
    // login
    [loginUser.fulfilled]: (state, action) => {
      console.log("Done");
      if (action.payload.success) {
        console.log(action.payload.accessToken);
        setAuthToken(action.payload.accessToken);
        state.accessToken = action.payload.accessToken;
      } else {
        state.isAuthenticated = false;
        state.user = {};
      }
    },
    [loadUser.rejected]: (state, action) => {
      console.log("false");
    },
    //register
    [registerUser.fulfilled]: (state, action) => {
      console.log("Done");
      if (action.payload.success) {
        setAuthToken(action.payload.accessToken);
        state.accessToken = action.payload.accessToken;
      } else {
        state.isAuthenticated = false;
        state.user = {};
      }
    },
  },
});

//creat reducer
const userReducer = userSlice.reducer;

//export selector
export const userSelector = (state) => state.userReducer.user;
export const acessTokenSelector = (state) => state.userReducer.accessToken;
export const authLoadingSelector = (state) => state.userReducer.authLoading;
export const isAuthenticatedSelector = (state) =>
  state.userReducer.isAuthenticated;

//export action

export const { logoutUser } = userSlice.actions;

//export reducer
export default userReducer;
