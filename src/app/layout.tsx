import { FooterComponent, HeaderComponent, ScreenComponent } from "@/components"
import { MobileMenuComponent } from "@/components/mobile/mobile-navigation/Mobile-navigation"
import { AppProvider } from "@/providers/App.provider"
import type { Metadata } from "next"
import { ReactNode } from "react"
import "../styles/global.scss"

export const metadata: Metadata = {
	title: "Silk Valley",
	description: "Silk Valley. Модный интернет магазин.",
}

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="ru">
			<body>
				<AppProvider>
					<HeaderComponent />
					<MobileMenuComponent />
					<ScreenComponent />
					<main className="main">{children}</main>
					<FooterComponent />
				</AppProvider>
			</body>
		</html>
	)
}

export default RootLayout
