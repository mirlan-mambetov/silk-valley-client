"use client"

import { ButtonComponent } from "@/components"
import { FC } from "react"
import { BiCategory } from "react-icons/bi"
import { CiUser } from "react-icons/ci"
import { IoSearchOutline } from "react-icons/io5"

import { SlHandbag } from "react-icons/sl"
import style from "./mobile-menu.module.scss"

export const MobileMenuComponent: FC = () => {
	return (
		<div className={style.menu}>
			<div className="container">
				<div className={style.list}>
					<div className={style.item}>
						<ButtonComponent>
							<BiCategory />
							<span>Категории</span>
						</ButtonComponent>
					</div>
					<div className={style.item}>
						<ButtonComponent>
							<IoSearchOutline />
							<span>Поиск</span>
						</ButtonComponent>
					</div>

					<div className={style.item}>
						<ButtonComponent>
							<SlHandbag />
							<span>Корзина</span>
						</ButtonComponent>
					</div>
					<div className={style.item}>
						<ButtonComponent>
							<CiUser />
							<span>Профиль</span>
						</ButtonComponent>
					</div>
				</div>
			</div>
		</div>
	)
}
