"use client"

import { UserApi } from "@/api/api-user/api-user"
import { FooterComponent, HeaderComponent, ScreenComponent } from "@/components"
import { MobileNavigation } from "@/components/mobile/mobile-navigation/Mobile-navigation"
import { ModalComponent } from "@/components/modal/Modal"
import SidebarComponent from "@/components/sidebar/Sidebar"
import { useAuth } from "@/hooks/auth/useAuth"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { useUser } from "@/hooks/user/useUser"
import { useWebSocket } from "@/hooks/ws/useWebSocket"
import React, { Suspense, useEffect, useRef } from "react"

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const hasFetchedProfile = useRef(false)
	const { addUser } = useStoreActions()
	const { isAuthentificated } = useAuth()
	const { user } = useUser()
	const socket = useWebSocket()

	useEffect(() => {
		const getUserProfile = async () => {
			if (!hasFetchedProfile.current) {
				hasFetchedProfile.current = true
				const data = await UserApi.fetchUserProfile()
				if (data) {
					addUser({ data })
					socket?.emit("logIn", { email: data.email })
				}
			}
		}
		if (isAuthentificated) {
			getUserProfile()
		} else {
			hasFetchedProfile.current = false
		}
	}, [isAuthentificated, hasFetchedProfile])

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
			<ScreenComponent />
			<main className="main">
				<Suspense>{children}</Suspense>
			</main>
			<FooterComponent />
			<ModalComponent />
		</>
	)
}
