"use client"

import { ButtonComponent } from "@/components"
import Image from "next/image"
import { FC } from "react"
import style from "./mobile-menu.module.scss"

export const MobileMenuComponent: FC = () => {
	return (
		<div className={style.menu}>
			<div className="container">
				<div className={style.list}>
					<div className={style.item}>
						<ButtonComponent>
							<Image
								src={`/icons/Category.svg`}
								alt="categories"
								width={30}
								height={30}
							/>
							<span>Категории</span>
						</ButtonComponent>
					</div>
					<div className={style.item}>
						<ButtonComponent>
							<Image
								src={"/icons/Search.svg"}
								alt="search"
								width={30}
								height={30}
							/>
							<span>Поиск</span>
						</ButtonComponent>
					</div>

					<div className={style.item}>
						<ButtonComponent>
							<Image
								src={"/icons/Bag.svg"}
								alt="search"
								width={30}
								height={30}
							/>
							<span>Корзина</span>
						</ButtonComponent>
					</div>
					<div className={style.item}>
						<ButtonComponent>
							<Image
								src={"/icons/Profile.svg"}
								alt="search"
								width={30}
								height={30}
							/>
							<span>Профиль</span>
						</ButtonComponent>
					</div>
				</div>
			</div>
		</div>
	)
}
