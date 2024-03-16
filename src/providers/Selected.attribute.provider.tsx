"use client"

import { SelectedAttributeContext } from "@/context/setSelectedAttribute.context"
import { FC, PropsWithChildren, useState } from "react"

export const SelectedAttributeProvider: FC<PropsWithChildren> = ({
	children,
}) => {
	const [color, setColor] = useState<string | undefined>(undefined)
	const [size, setSize] = useState<string | undefined>(undefined)

	const setColorHandler = (color: string) => {
		setColor(color)
	}
	const setSizeHandler = (size: string) => {
		setSize(size)
	}

	return (
		<SelectedAttributeContext.Provider
			value={{ color, size, setColorHandler, setSizeHandler }}
		>
			{children}
		</SelectedAttributeContext.Provider>
	)
}
