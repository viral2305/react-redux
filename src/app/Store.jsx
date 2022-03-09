import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "../features/counter/counterSlice";
import themeReducers from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    counters: counterReducers,
    theme: themeReducers,
  },
});

// import { createStore, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
// import { createLogger } from "redux-logger";
// import rootReducer from "../Reducers";
// const loggerMiddleware = createLogger();
// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunkMiddleware, loggerMiddleware)
// );
// export default store;
