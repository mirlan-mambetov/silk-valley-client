import { ScreenContext } from "@/context/screen.context"
import { useContext } from "react"

export const useScreen = () => {
	const { clearContentHandler, content, isOpen, setContentHandler } =
		useContext(ScreenContext)
	return {
		clearContentHandler,
		content,
		isOpen,
		setContentHandler,
	}
}
