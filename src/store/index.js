import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/todosSlice";

export default configureStore({
  reducer: {
    users: counterSlice,
  },
});
