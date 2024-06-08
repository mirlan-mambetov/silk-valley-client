"use client"

import { Bar, Button, MapIcon, Search, SelectLocation } from "@/components"
import { FC } from "react"

import { useScreen } from "@/hooks/screen/useScreen"
import cn from "classnames"
import { usePathname } from "next/navigation"
import style from "./mobile-header.module.scss"

export const MobileHeaderComponent: FC = () => {
	const pathName = usePathname()
	const { screenHandle } = useScreen()
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
					<Button
						className={style.map}
						onClick={() => screenHandle({ content: <SelectLocation /> })}
					>
						<MapIcon fill="#6e6e6e" color="white" iconVersion="v2" />
					</Button>
					<Search />
				</div>
			</div>
		</div>
	)
}
