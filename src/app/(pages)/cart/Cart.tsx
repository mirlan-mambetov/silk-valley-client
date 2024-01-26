"use client"

import {
	ButtonComponent,
	CartInfoComponent,
	CartProductComponent,
	HeadingComponent,
} from "@/components"
import { FC } from "react"

import { FaUser } from "react-icons/fa6"
import { CART_DATA } from "./cart.data"

import { FaMapMarkerAlt } from "react-icons/fa"
import style from "./cart.module.scss"

export const Cart: FC = () => {
	const data = CART_DATA
	return (
		<>
			<HeadingComponent text="Корзина" length={3} />
			<div className={style.cart}>
				<CartProductComponent products={data} />
				<CartInfoComponent />
				<div className={style.order}>
					<div className={style.box}>
						<h5 className={style.title}>
							<span>Детали доставки</span>
						</h5>
						<div className={style.out}>
							<ButtonComponent className={style.button}>
								<FaUser />
								Войдите в систему или зарегистрируйтесь
							</ButtonComponent>
						</div>
					</div>
					<div className={style.box}>
						<h5 className={style.title}>
							<span>Информация о получателе</span>
						</h5>
						<div className={style.out}>
							<ButtonComponent className={style.button}>
								<FaMapMarkerAlt />
								Выберите координаты
							</ButtonComponent>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
