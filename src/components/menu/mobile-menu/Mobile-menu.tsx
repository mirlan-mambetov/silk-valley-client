"use client"

import { ButtonComponent } from "@/components"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FC } from "react"
import style from "./mobile-menu.module.scss"

export const MobileMenuComponent: FC = () => {
	const { push } = useRouter()
	return (
		<div className={style.menu}>
			<div className="container">
				<div className={style.list}>
					<div className={style.item}>
						<ButtonComponent>
							<Image
								src={`/icons/Category.svg`}
								alt="categories"
								width={25}
								height={25}
							/>
							{/* <span>Категории</span> */}
						</ButtonComponent>
					</div>
					<div className={style.item}>
						<ButtonComponent>
							<Image
								src={"/icons/Search.svg"}
								alt="search"
								width={25}
								height={25}
							/>
							{/* <span>Поиск</span> */}
						</ButtonComponent>
					</div>

					<div className={style.item}>
						<ButtonComponent onClick={() => push("/cart")}>
							<Image
								src={"/icons/Bag.svg"}
								alt="search"
								width={25}
								height={25}
							/>
							{/* <span>Корзина</span> */}
						</ButtonComponent>
					</div>
					<div className={style.item}>
						<ButtonComponent>
							<Image
								src={"/icons/Heart.svg"}
								alt="search"
								width={25}
								height={25}
							/>
							{/* <span>Профиль</span> */}
						</ButtonComponent>
					</div>
					<div className={style.item}>
						<ButtonComponent>
							<Image
								src={"/icons/Profile.svg"}
								alt="search"
								width={25}
								height={25}
							/>
							{/* <span>Профиль</span> */}
						</ButtonComponent>
					</div>
				</div>
			</div>
		</div>
	)
}
