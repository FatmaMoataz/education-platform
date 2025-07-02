import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth";
import lessonSlice from "./slices/lesson";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    lessons: lessonSlice,
  },
});
