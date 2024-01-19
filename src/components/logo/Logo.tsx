"use client"

import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import style from "./logo.module.scss"

export const LogoComponent: FC = () => {
	return (
		<div className={style.logo}>
			<Link href={`/`}>
				<Image
					priority
					src="/icons/Silk Valley.svg"
					width={300}
					height={300}
					alt="logo"
				/>
			</Link>
		</div>
	)
}
