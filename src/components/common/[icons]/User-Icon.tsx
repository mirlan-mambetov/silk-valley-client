"use client"

import { FC } from "react"
import { LuUser } from "react-icons/lu"
import { IIconProps } from "./Icons.props"

export const UserIcon: FC<IIconProps> = ({ userIcon, ...props }) => {
	switch (userIcon) {
		case "v1":
			return (
				<svg
					{...props}
					width="30"
					height="30"
					viewBox="0 0 25 25"
					role="img"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="12" cy="6" r="4" stroke="#1C274C" strokeWidth="1.5" />
					<path
						d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
						stroke="#1C274C"
						strokeWidth="1.5"
					/>
				</svg>
			)
		case "v2":
			return <LuUser {...props} />
		default:
			return <LuUser {...props} />
	}
}
