"use client"

import { Bar, Button, FieldComponent, Logo } from "@/components"
import { FC } from "react"

import cn from "classnames"
import Image from "next/image"
import { usePathname } from "next/navigation"
import style from "./mobile-header.module.scss"

export const MobileHeaderComponent: FC = () => {
	const pathName = usePathname()
	// const { setContentHandler } = useScreen()
	const isProductPage = /^\/product\/[a-zA-Z0-9_-]+/.test(pathName)
	// const isPromotionsPage = /^\/promotions\/[a-zA-Z0-9_-]+/.test(pathName)

	return (
		<div
			className={cn(style.header, {
				[style.strech]: isProductPage,
			})}
		>
			<Bar />
			<div className="container">
				<div className={style.wrap}>
					<Logo className={style.logo} height={40} width={70} />
					<div className={style.search}>
						<Button className={style.button}>
							<Image
								src={"/icons/Search.svg"}
								alt="search"
								width={16}
								height={16}
							/>
							{/* <span>Поиск</span> */}
						</Button>
						<FieldComponent />
					</div>
				</div>
			</div>
		</div>
	)
}
