"use client"

import { FC } from "react"
import { IIconProps } from "./Icons.props"

export const HomeIcon: FC<IIconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			aria-label="Главная"
			fill="none"
			height="25"
			role="img"
			viewBox="0 0 24 24"
			width="25"
		>
			<path
				d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"
				color="#1C274C"
				strokeWidth="1.8"
				stroke="#1C274C"
			></path>
		</svg>
	)
}
