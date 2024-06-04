"use client"

import { appStore, persist } from "@/store/store"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FC, PropsWithChildren } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { LoaderProvider } from "./Loader.provider"
import { ScreenProvider } from "./Screen.provider"

import { AttributesProvider } from "./Attributes.prodivder"
import { NotificationProvider } from "./Notification.provider"
import { SidebarProvider } from "./Sidebar.provider"
import { WebSocketProvider } from "./Ws.provider"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Provider store={appStore}>
			<WebSocketProvider>
				<PersistGate persistor={persist} loading={null}>
					<QueryClientProvider client={queryClient}>
						<NotificationProvider>
							<ScreenProvider>
								<LoaderProvider>
									<AttributesProvider>
										<SidebarProvider>{children}</SidebarProvider>
									</AttributesProvider>
								</LoaderProvider>
							</ScreenProvider>
						</NotificationProvider>
					</QueryClientProvider>
				</PersistGate>
			</WebSocketProvider>
		</Provider>
	)
}
