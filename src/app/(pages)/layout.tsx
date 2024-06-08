"use client"

import { UserApi } from "@/api/api-user/api-user"
import { FooterComponent, HeaderComponent } from "@/components"
import { MobileNavigation } from "@/components/mobile/mobile-navigation/Mobile-navigation"
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
	const { addUser } = useStoreActions()
	const { isAuthentificated } = useAuth()

	const { data } = useQuery({
		queryKey: ["getUserProfile"],
		queryFn: () => UserApi.fetchUserProfile(),
		enabled: !!isAuthentificated,
	})

	useEffect(() => {
		if (data) {
			addUser({ data })
		}
	}, [isAuthentificated, data])

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
		</>
	)
}
