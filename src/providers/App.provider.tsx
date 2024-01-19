"use client"

import { FC, PropsWithChildren } from "react"
import { ScreenProvider } from "./Screen.provider"

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	return <ScreenProvider>{children}</ScreenProvider>
}
