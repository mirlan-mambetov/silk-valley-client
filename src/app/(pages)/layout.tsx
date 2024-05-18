"use client"

import { UserApi } from "@/api/api-user/api-user"
import {
	FooterComponent,
	HeaderComponent,
	NotifyComponent,
	ScreenComponent,
} from "@/components"
import { MobileNavigation } from "@/components/mobile/mobile-navigation/Mobile-navigation"
import { ModalComponent } from "@/components/modal/Modal"
import { ModalDialogComponent } from "@/components/modal/modal-dialog/Modal-dialog"
import SidebarComponent from "@/components/sidebar/Sidebar"
import { useAuth } from "@/hooks/auth/useAuth"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { useUser } from "@/hooks/user/useUser"
import { useWebSocket } from "@/hooks/ws/useWebSocket"
import React, { Suspense, useEffect } from "react"

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const { addUser } = useStoreActions()
	const { isAuthentificated } = useAuth()
	const { user } = useUser()
	const socket = useWebSocket()

	const getUserProfile = async () => {
		const data = await UserApi.fetchUserProfile()
		if (data) {
			addUser({ data })
			console.log(data)
			socket?.emit("logIn", { email: data.email })
		}
	}

	useEffect(() => {
		if (isAuthentificated) {
			getUserProfile()
		}
	}, [isAuthentificated, socket])

	useEffect(() => {
		if (!socket) return

		const handleLogOutWithClosed = () => {
			if (user) {
				socket.emit("logOut", { email: user.email })
			}
		}
		window.addEventListener("beforeunload", handleLogOutWithClosed)

		return () => {
			window.removeEventListener("beforeunload", handleLogOutWithClosed)
		}
	}, [])

	return (
		<>
			<HeaderComponent />
			<MobileNavigation />
			<SidebarComponent />
			<ScreenComponent />
			<main className="main">
				<Suspense>{children}</Suspense>
			</main>
			<FooterComponent />
			<NotifyComponent />
			<ModalDialogComponent />
			<ModalComponent />
		</>
	)
}
