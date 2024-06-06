import { INotificationOptions } from "@/context/notification.context"

export interface INotificationProps {
	message: string | React.ReactNode
	onClose: () => void
	isShow: boolean
	options?: INotificationOptions
	onConfirm?: () => void
	onCanceled?: () => void
	type?: "error" | "success"
}
