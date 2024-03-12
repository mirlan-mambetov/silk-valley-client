"use client"

import {
	ButtonComponent,
	DeliverComponent,
	FieldComponent,
	LogoComponent,
} from "@/components"
import { FC } from "react"

import { useScreen } from "@/hooks/screen/useScreen"
import cn from "classnames"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { FaMapMarkerAlt } from "react-icons/fa"
import style from "./mobile-header.module.scss"

export const MobileHeaderComponent: FC = () => {
	const pathName = usePathname()
	const { setContentHandler } = useScreen()
	const isProductPage = /^\/product\/[a-zA-Z0-9_-]+/.test(pathName)
	// const isPromotionsPage = /^\/promotions\/[a-zA-Z0-9_-]+/.test(pathName)

	return (
		<div
			className={cn(style.header, {
				[style.strech]: isProductPage,
			})}
		>
			<div className="container">
				<div className={style.top}>
					<div className={style.row}>
						<div className={style.deliver}>
							<FaMapMarkerAlt />
							<ButtonComponent
								aria-label="Доставка"
								onClick={() => setContentHandler(<DeliverComponent />)}
							>
								<span>г. Каракол</span>
							</ButtonComponent>
						</div>
					</div>
				</div>
				<div className={style.wrap}>
					<LogoComponent className={style.logo} height={40} width={70} />
					<div className={style.search}>
						<ButtonComponent className={style.button}>
							<Image
								src={"/icons/Search.svg"}
								alt="search"
								width={16}
								height={16}
							/>
							{/* <span>Поиск</span> */}
						</ButtonComponent>
						<FieldComponent />
					</div>
				</div>
			</div>
		</div>
	)
}
