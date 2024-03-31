"use client"

import {
	FooterComponent,
	HeaderComponent,
	NotifyComponent,
	NotifyHeaderComponent,
	ScreenComponent,
} from "@/components"
import { MobileMenuComponent } from "@/components/mobile/mobile-navigation/Mobile-navigation"
import { ModalComponent } from "@/components/modal/Modal"
import { ModalDialogComponent } from "@/components/modal/modal-dialog/Modal-dialog"
import { FC, PropsWithChildren, Suspense } from "react"

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<NotifyHeaderComponent />
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

export default HomeLayout
