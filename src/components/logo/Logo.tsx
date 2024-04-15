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
	height,
	width,
	...props
}) => {
	return (
		<div className={cn(style.logo, className)} {...props}>
			<Link href={`/`}>
				<Image
					priority
					src="/icons/Silk Valley.svg"
					width={width ? width : 300}
					height={height ? height : 300}
					alt="Silk Valley logotype"
				/>
			</Link>
		</div>
	)
}
