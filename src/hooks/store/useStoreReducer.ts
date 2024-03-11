import { TypeRootState } from "@/store/store"
import { TypedUseSelectorHook, useSelector } from "react-redux"

export const useStoreReducer: TypedUseSelectorHook<TypeRootState> = useSelector
