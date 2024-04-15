"use client"

import { SidebarContext } from "@/context/sidebar.context"
import { FC, PropsWithChildren, useEffect, useState } from "react"

export const SidebarProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)

	const sidebarHandler = () => setIsOpen(!isOpen)
	const closeSidebar = () => setIsOpen(false)

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "auto"
		}
		document.addEventListener("click", closeSidebar)
		return () => {
			document.removeEventListener("click", closeSidebar)
		}
	}, [isOpen])

	return (
		<SidebarContext.Provider value={{ sidebarHandler, isOpen }}>
			{children}
		</SidebarContext.Provider>
	)
}
