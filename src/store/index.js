import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import userReducer from "./reducers/userSlice";
import vocabularyReducer from "./reducers/vocabularySlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["vocabularyReducer", "userReducer"], // only navigation will be persisted
};
const reducer = combineReducers({
  vocabularyReducer,
  userReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

// Store
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
// cartReducer.subscribe(() => {
//   localStorage.setItem("reduxState", JSON.stringify(store.getState()));
// });

// Export
export default store;
