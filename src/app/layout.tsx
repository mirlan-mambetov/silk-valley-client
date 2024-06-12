import { SITE_NAME } from "@/constants/app.constants"
import { AppProvider } from "@/providers/App.provider"
import type { Metadata } from "next"
import React, { Suspense } from "react"
import "../styles/global.scss"

export const metadata: Metadata = {
	metadataBase: new URL(process.env.SLKVALLEY_URl || "http://localhost:3000"),
	applicationName: "Silk Valley e-commerce",
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: "Silk Valley. Модный интернет магазин.",
	keywords:
		"Купить одежду в магазине Silk Valley. Большой ассортимент, огромный выбор!",

	alternates: {
		canonical: "/",
		languages: {
			ru: "/ru-RU",
		},
	},
}
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
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
