import { configureStore } from "@reduxjs/toolkit"
import { FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE } from "redux-persist"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"
import storage from "redux-persist/lib/storage"
import { rootReducer } from "./root-reducers"

const persistedReducer = persistReducer(
	{ key: "silkValley", storage, whitelist: ["deliver"] },
	rootReducer
)

export const appStore = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, PAUSE, PERSIST, REHYDRATE, PURGE],
			},
		}),
})

export const persist = persistStore(appStore)
export type TypeRootState = ReturnType<typeof rootReducer>
