import { AnyAction } from "@reduxjs/toolkit";
import {
    shallowEqual,
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
} from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import type { RootState } from "./store";

export const useAppDispatch = () =>
    useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useShallowEqualSelector: TypedUseSelectorHook<RootState> = (
    selector
) => useSelector(selector, shallowEqual);
