"use client"

import cn from "classnames"
import Image from "next/image"
import Link from "next/link"
import { DetailsHTMLAttributes, FC } from "react"
import style from "./logo.module.scss"

interface ILogoComponentProps extends DetailsHTMLAttributes<HTMLDivElement> {
	width?: number
	height?: number
}
export const LogoComponent: FC<ILogoComponentProps> = ({
	className,
	height = 300,
	width = 300,
}) => {
	return (
		<div className={cn(style.logo, className)}>
			<Link href={`/`}>
				<Image
					priority
					src="/icons/Silk Valley.svg"
					width={width}
					height={height}
					alt="Silk Valley logotype"
				/>
			</Link>
		</div>
	)
}
