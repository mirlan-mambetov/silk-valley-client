import { NO_INDEX_PAGE } from "@/constants/app.constants"
import { Metadata } from "next"
import { Notifications } from "./Notifications"
export const metadata: Metadata = {
	title: "Уведомления",
	...NO_INDEX_PAGE,
}

export default function NotificationPage() {
	return <Notifications />
}
