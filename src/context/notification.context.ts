import { createContext } from "react"

export interface INotificationOptions {
	background?: "Black" | "White"
	notifyType?: "Notify" | "Dialog"
	type?: "error" | "success"
}

export interface INotifyPayload {
	message: string | React.ReactNode
	options?: INotificationOptions
	onConfirm?: () => void
	onCanceled?: () => void
}

interface INotificationInitial {
	addNotification: (payload: INotifyPayload) => void
}

export const NotificationContext = createContext<
	INotificationInitial | undefined
>(undefined)
