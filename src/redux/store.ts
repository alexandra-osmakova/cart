import { AnyAction } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import RootReducer from "./reducers";

export const store = createStore(RootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>