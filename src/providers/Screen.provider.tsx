"use client"

import { ScreenComponent } from "@/components"
import { IContextPaylod, ScreenContext } from "@/context/screen.context"
import { usePathname } from "next/navigation"
import { FC, PropsWithChildren, ReactNode, useEffect, useState } from "react"

export const ScreenProvider: FC<PropsWithChildren> = ({ children }) => {
	const [active, setActive] = useState<boolean>(false)
	const [typeOfScreen, setTypeOfScreen] = useState<"default" | "modal">(
		"default"
	)
	const [content, setContent] = useState<ReactNode | null>()
	const pathName = usePathname()

	const screenHandle = (paylod: IContextPaylod) => {
		setActive(!active)
		setContent(paylod.content)
		if (paylod.typeOfScreen) {
			setTypeOfScreen(paylod.typeOfScreen)
		}
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

	const closeHandle = () => {
		setActive(false)
		setContent(null)
	}

	return (
		<ScreenContext.Provider value={{ screenHandle, closeHandle }}>
			{children}
			<ScreenComponent
				active={active}
				content={content}
				closeHandle={closeHandle}
				typeOfScreen={typeOfScreen}
			/>
		</ScreenContext.Provider>
	)
}
