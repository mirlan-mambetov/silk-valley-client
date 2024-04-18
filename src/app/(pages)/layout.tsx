"use client"

import { UserApi } from "@/api/api-user/api-user"
import {
	FooterComponent,
	HeaderComponent,
	NotifyComponent,
	ScreenComponent,
	SidebarComponent,
} from "@/components"
import { MobileNavigation } from "@/components/mobile/mobile-navigation/Mobile-navigation"
import { ModalComponent } from "@/components/modal/Modal"
import { ModalDialogComponent } from "@/components/modal/modal-dialog/Modal-dialog"
import {
	getSessionStorage,
	setSessionStorage,
} from "@/helpers/session.storage.helper"
import { useAuth } from "@/hooks/auth/useAuth"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { useQuery } from "@tanstack/react-query"
import React, { Suspense, useEffect } from "react"

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const { openDialogHandler } = useStoreActions()
	const { isAuthentificated } = useAuth()
	const { addUser, clearUser } = useStoreActions()
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

	useEffect(() => {
		const isVisited = getSessionStorage()
		if (isVisited !== "true") {
			openDialogHandler({
				message:
					"Добро пожаловать! Вам предоставлено уникальная возможность, сейчас ведется тестирование проекта Silk Valley! Удачи в тестировании.",
				type: "notify",
			})
		}
		setSessionStorage("true")
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
