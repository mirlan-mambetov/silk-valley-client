import { SITE_NAME } from "@/constants/app.constants"
import { AppProvider } from "@/providers/App.provider"
import type { Metadata } from "next"
import { ReactNode } from "react"
import "../styles/global.scss"

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: "Silk Valley. Модный интернет магазин.",
}

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="ru">
			<body>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	)
}

export default RootLayout
