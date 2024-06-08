"use client"

import { FC } from "react"
import { CiLocationOn } from "react-icons/ci"
import { IoLocationSharp } from "react-icons/io5"
import { IIconProps } from "./Icons.props"

export const MapIcon: FC<IIconProps> = ({ iconVersion, ...props }) => {
	switch (iconVersion) {
		case "v1":
			return <CiLocationOn {...props} />
		case "v2":
			return <IoLocationSharp {...props} />

		default:
			return <CiLocationOn {...props} />
	}
}
