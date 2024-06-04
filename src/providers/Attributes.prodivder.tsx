import {
	AttributesContext,
	IAttributePayload,
} from "@/context/attributes.context"
import { ReactNode, useState } from "react"

export const AttributesProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [payload, setPayload] = useState<IAttributePayload>({
		selectedColor: undefined,
		selectedImages: undefined,
		selectedSize: undefined,
	})

	const addAttribute = (payload: IAttributePayload) => {
		setPayload((prevState) => ({ ...prevState, ...payload }))
	}
	return (
		<AttributesContext.Provider value={{ addAttribute, payload }}>
			{children}
		</AttributesContext.Provider>
	)
}
