"use client"

import { UserApi } from "@/api/api-user/api-user"
import { FooterComponent, HeaderComponent } from "@/components"
import { MobileNavigation } from "@/components/mobile/mobile-navigation/Mobile-navigation"
import { ModalComponent } from "@/components/modal/Modal"
import SidebarComponent from "@/components/sidebar/Sidebar"
import { useAuth } from "@/hooks/auth/useAuth"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { useUser } from "@/hooks/user/useUser"
import { useWebSocket } from "@/hooks/ws/useWebSocket"
import { useQuery } from "@tanstack/react-query"
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

	const { data } = useQuery({
		queryKey: ["getUserProfile"],
		queryFn: () => UserApi.fetchUserProfile(),
		enabled: !!isAuthentificated,
	})

	useEffect(() => {
		if (data) {
			addUser({ data })
			socket?.emit("logIn", { email: data.email })
		}
	}, [data])

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
	}, [socket, user])

	return (
		<>
			<HeaderComponent />
			{/* <Cungrulations /> */}
			<MobileNavigation />
			<SidebarComponent />
			<main className="main">
				<Suspense>{children}</Suspense>
			</main>
			<FooterComponent />
			<ModalComponent />
		</>
	)
}
