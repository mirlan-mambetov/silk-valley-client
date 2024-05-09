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
import { useQuery } from "@tanstack/react-query"
import React, { Suspense, useEffect } from "react"

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const { addUser, clearUser } = useStoreActions()
	const { isAuthentificated } = useAuth()

	const { data } = useQuery({
		queryKey: ["getUserProfile"],
		queryFn: () => UserApi.fetchUserProfile(),
		enabled: isAuthentificated,
	})

	useEffect(() => {
		if (isAuthentificated) {
			if (data) {
				addUser({ data })
			}
		} else {
			clearUser()
		}
	}, [isAuthentificated, data])

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
