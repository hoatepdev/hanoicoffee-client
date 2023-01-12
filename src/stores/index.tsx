import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counterSlice";
// import taskReducer from '../features/task/taskSlice';
// import boardReducer from '../features/board/boardSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // task: taskReducer,
    // board: boardReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
