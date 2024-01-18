import { RootState, AppDispatch } from "./redux-tlk";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { Dispatch, AnyAction } from "redux";

export const useAppDispatch = () => useDispatch<Dispatch<AnyAction>>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;