import { Notification } from "@/components"
import {
	INotifyPayload,
	NotificationContext,
} from "@/context/notification.context"
import { FC, PropsWithChildren, useState } from "react"

export const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isShow, setIsShow] = useState(false)
	const [payload, setPayload] = useState<INotifyPayload>({
		message: "",
		options: { background: "White", notifyType: "Notify" },
	})
	const addNotification = (payload: INotifyPayload) => {
		setIsShow(true)
		setPayload(payload)
		if (payload.options?.notifyType !== "Dialog") {
			new Promise<void>((resolve, reject) => {
				setTimeout(() => {
					resolve()
					removeNotification()
				}, 3000)
			})
		}
	}

	const removeNotification = async () => {
		setIsShow(false)
		new Promise<void>((resolve, reject) => {
			setTimeout(() => {
				setPayload({ message: undefined })
				resolve()
			}, 3000)
		})
	}

	return (
		<NotificationContext.Provider value={{ addNotification }}>
			{children}
			<Notification
				onCanceled={payload.onCanceled}
				onConfirm={payload.onConfirm}
				options={payload.options}
				isShow={isShow}
				message={payload.message}
				onClose={removeNotification}
			/>
		</NotificationContext.Provider>
	)
}
