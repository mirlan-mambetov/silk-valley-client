"use client"

import {
	Bar,
	Button,
	Logo,
	MapIcon,
	Search,
	SelectLocation,
} from "@/components"
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
					<div className={style.column}>
						<Logo variant="SV" color="black" width={40} height={27} />
						<Search />
					</div>
					<div className={style.column}>
						<Button
							onClick={() => screenHandle({ content: <SelectLocation /> })}
						>
							<MapIcon iconVersion="v2" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
