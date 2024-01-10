import { FooterComponent, HeaderComponent } from "@/components"
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
				<HeaderComponent />
				{children}
				<FooterComponent />
			</body>
		</html>
	)
}

export default RootLayout
