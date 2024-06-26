"use client"

import { UserApi } from "@/api/api-user/api-user"
import { Cart, Footer, Header } from "@/components"
import Sidebar from "@/components/common/[sidebar]/Sidebar"
import { MobileNavigation } from "@/components/mobile/mobile-navigation/Mobile-navigation"
import { useAuth } from "@/hooks/auth/useAuth"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { useQuery } from "@tanstack/react-query"
import React, { useEffect } from "react"

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
		enabled: !!isAuthentificated,
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
			<Header />
			{/* <Cungrulations /> */}
			<MobileNavigation />
			<Sidebar />
			<Cart />
			<main className="main">{children}</main>
			<Footer />
		</>
	)
}
