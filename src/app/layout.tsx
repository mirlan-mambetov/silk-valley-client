import { SITE_NAME } from "@/constants/app.constants"
import { AppProvider } from "@/providers/App.provider"
import type { Metadata } from "next"
import React, { Suspense } from "react"
import "../styles/global.scss"

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: "Silk Valley. Модный интернет магазин.",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="ru">
			<body>
				<AppProvider>
					<Suspense>{children}</Suspense>
				</AppProvider>
			</body>
		</html>
	)
}

export default RootLayout
