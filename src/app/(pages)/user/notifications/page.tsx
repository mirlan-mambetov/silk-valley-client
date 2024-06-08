import { Metadata } from "next"
import { Notifications } from "./Notifications"

export const metadata: Metadata = {
	title: "Уведомления",
	robots: {
		index: false,
		follow: false,
	},
}

export default function NotificationPage() {
	return <Notifications />
}
