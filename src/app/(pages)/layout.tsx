"use client"

import {
	FooterComponent,
	HeaderComponent,
	NotifyComponent,
	NotifyHeaderComponent,
	ScreenComponent,
} from "@/components"
import { MobileMenuComponent } from "@/components/mobile/mobile-navigation/Mobile-navigation"
import { FC, PropsWithChildren } from "react"

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<NotifyHeaderComponent />
			<HeaderComponent />
			<MobileMenuComponent />
			<ScreenComponent />
			<main className="main">{children}</main>
			<FooterComponent />
			<NotifyComponent />
		</>
	)
}

export default HomeLayout
