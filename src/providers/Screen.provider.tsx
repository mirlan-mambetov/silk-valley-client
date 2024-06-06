"use client"

import { ScreenComponent } from "@/components"
import { ScreenContext } from "@/context/screen.context"
import { usePathname } from "next/navigation"
import { FC, PropsWithChildren, ReactNode, useEffect, useState } from "react"

export const ScreenProvider: FC<PropsWithChildren> = ({ children }) => {
	const [active, setActive] = useState<boolean>(false)
	const [content, setContent] = useState<ReactNode | null>()
	const pathName = usePathname()

	const screenHandle = (content: ReactNode) => {
		setActive(!active)
		setContent(content)
	}

	useEffect(() => {
		if (active) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "visible"
		}
	}, [active])

	useEffect(() => {
		if (active) {
			closeHandle()
		}
	}, [pathName])

	const closeHandle = () => setActive(false)

	return (
		<ScreenContext.Provider value={{ screenHandle }}>
			{children}
			<ScreenComponent
				active={active}
				content={content}
				closeHandle={closeHandle}
			/>
		</ScreenContext.Provider>
	)
}
