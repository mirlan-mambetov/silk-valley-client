"use client"

import { ScreenContext } from "@/context/screen.context"
import { usePathname } from "next/navigation"
import { FC, PropsWithChildren, ReactNode, useEffect, useState } from "react"

export const ScreenProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [content, setContent] = useState<ReactNode | null>()
	const pathNameRoute = usePathname()

	const setContentHandler = (content: ReactNode) => {
		setIsOpen(true)
		document.body.style.overflow = "hidden"
		setContent(content)
	}
	const clearContentHandler = () => {
		setIsOpen(false)
		document.body.style.overflow = "visible"
	}

	useEffect(() => {
		setIsOpen(false)
	}, [pathNameRoute])

	return (
		<ScreenContext.Provider
			value={{ isOpen, content, setContentHandler, clearContentHandler }}
		>
			{children}
		</ScreenContext.Provider>
	)
}
