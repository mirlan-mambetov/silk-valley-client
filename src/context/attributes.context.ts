import { createContext } from "react"

export interface IAttributePayload {
	selectedSize?: string
	selectedColor?: string
	selectedImages?: string[]
}

export interface IAttributesInitial {
	payload: IAttributePayload
	addAttribute: (payload: IAttributePayload) => void
}

export const AttributesContext = createContext<IAttributesInitial | undefined>(
	undefined
)
