import { appApi } from "@/api/api"
import { configureStore } from "@reduxjs/toolkit"
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
} from "redux-persist"
import persistStore from "redux-persist/es/persistStore"
import storage from "redux-persist/lib/storage"
import { rootReducer } from "./root-reducers"

let mainReducer = rootReducer

const persistConfig = {
	key: "silkValley",
	storage,
	whitelist: ["deliver", "cart"],
}
if (typeof window !== "undefined") {
	const { persistReducer } = require("redux-persist")
	const persistedReducer = persistReducer(persistConfig, rootReducer)
	mainReducer = persistedReducer
}

export const appStore = configureStore({
	reducer: mainReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, PAUSE, PERSIST, REHYDRATE, PURGE, REGISTER],
			},
		}).concat(appApi.middleware),
})

export const persist = persistStore(appStore)
export type TypeRootState = ReturnType<typeof rootReducer>
