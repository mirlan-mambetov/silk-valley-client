"use client"

import { appStore, persist } from "@/store/store"
import { FC, PropsWithChildren } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { ScreenProvider } from "./Screen.provider"

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Provider store={appStore}>
			<PersistGate persistor={persist}>
				<ScreenProvider>{children}</ScreenProvider>
			</PersistGate>
		</Provider>
	)
}
