import { SelectedAttributeContext } from "@/context/setSelectedAttribute.context"
import { useContext } from "react"

export const useSelectedAttributes = () => {
	const {
		color,
		setColorHandler,
		setSizeHandler,
		size,
		setClickHandler,
		isClick,
		clearHandler,
	} = useContext(SelectedAttributeContext)

	return {
		color,
		setColorHandler,
		setSizeHandler,
		size,
		setClickHandler,
		isClick,
		clearHandler,
	}
}
