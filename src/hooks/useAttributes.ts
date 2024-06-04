import { AttributesContext } from "@/context/attributes.context"
import { useContext } from "react"

export const useAttributes = () => {
	const context = useContext(AttributesContext)
	if (!context) {
		throw new Error(
			"useNotification must be used within a NotificationProvider"
		)
	}
	return context
}
