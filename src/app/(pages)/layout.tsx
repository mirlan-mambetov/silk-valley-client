"use client"

import {
	FooterComponent,
	HeaderComponent,
	NotifyComponent,
	ScreenComponent,
} from "@/components"
import { MobileMenuComponent } from "@/components/mobile/mobile-navigation/Mobile-navigation"
import { ModalComponent } from "@/components/modal/Modal"
import { ModalDialogComponent } from "@/components/modal/modal-dialog/Modal-dialog"
import React, { Suspense } from "react"

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<HeaderComponent />
			<MobileMenuComponent />
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
