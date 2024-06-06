import { ScreenContext } from "@/context/screen.context"
import { useContext } from "react"

export const useScreen = () => {
	const context = useContext(ScreenContext)
	if (!context) {
		throw new Error("ScreenContext must be used within a ScreenProvider!")
	}
	return context
}
