"use client"

import { ButtonComponent, MenuCategoriesComponent } from "@/components"
import { useScreen } from "@/hooks/screen/useScreen"
import cn from "classnames"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FC } from "react"
import style from "./mobile-menu.module.scss"

export const MobileMenuComponent: FC = () => {
	const { push } = useRouter()
	const { setContentHandler, isOpen, clearContentHandler } = useScreen()

	return (
		<div
			className={cn(style.menu, {
				[style.shadow]: isOpen,
			})}
		>
			<div className="container">
				<div className={style.list}>
					<div className={style.item}>
						<ButtonComponent onClick={() => push("/")}>
							<Image
								src={"/icons/Home.svg"}
								alt="search"
								width={28}
								height={28}
							/>
							{/* <span>Профиль</span> */}
						</ButtonComponent>
					</div>
					<div className={style.item}>
						<ButtonComponent
							onClick={() =>
								isOpen
									? clearContentHandler()
									: setContentHandler(<MenuCategoriesComponent />)
							}
						>
							<Image
								src={`/icons/Category.svg`}
								alt="categories"
								width={26}
								height={26}
							/>
							{/* <span>Категории</span> */}
						</ButtonComponent>
					</div>

					<div className={style.item}>
						<ButtonComponent onClick={() => push("/cart")}>
							<Image
								src={"/icons/Bag.svg"}
								alt="search"
								width={28}
								height={28}
							/>
							{/* <span>Корзина</span> */}
						</ButtonComponent>
					</div>

					<div className={style.item}>
						<ButtonComponent>
							<Image
								src={"/icons/Profile.svg"}
								alt="search"
								width={28}
								height={28}
							/>
							{/* <span>Профиль</span> */}
						</ButtonComponent>
					</div>
				</div>
			</div>
		</div>
	)
}
