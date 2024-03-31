"use client"

import { SelectedAttributeContext } from "@/context/setSelectedAttribute.context"
import { FC, PropsWithChildren, useState } from "react"

export const SelectedAttributeProvider: FC<PropsWithChildren> = ({
	children,
}) => {
	const [color, setColor] = useState<string | undefined>(undefined)
	const [size, setSize] = useState<string | undefined>(undefined)
	const [isClick, setIsClick] = useState<boolean>(false)

	const setColorHandler = (color: string | undefined) => {
		if (color) {
			setColor(color)
		}
	}
	const setSizeHandler = (size: string | undefined) => {
		if (size) {
			setSize(size)
		}
	}

	const setClickHandler = () => setIsClick(!isClick)
	const clearHandler = () => {
		setColor(undefined)
		setSize(undefined)
	}

	return (
		<SelectedAttributeContext.Provider
			value={{
				color,
				size,
				setColorHandler,
				setSizeHandler,
				isClick,
				setClickHandler,
				clearHandler,
			}}
		>
			{children}
		</SelectedAttributeContext.Provider>
	)
}
