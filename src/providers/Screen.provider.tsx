"use client"

import { ScreenContext } from "@/context/screen.context"
import { FC, PropsWithChildren, ReactNode, useState } from "react"

export const ScreenProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [content, setContent] = useState<ReactNode | null>()

	const setContentHandler = (content: ReactNode) => {
		setIsOpen(true)
		setContent(content)
	}
	const clearContentHandler = () => {
		setIsOpen(false)
		setContent(null)
	}

	return (
		<ScreenContext.Provider
			value={{ isOpen, content, setContentHandler, clearContentHandler }}
		>
			{children}
		</ScreenContext.Provider>
	)
}
