"use client"

import {
	AuthComponent,
	ButtonComponent,
	CartInfoComponent,
	CartProductComponent,
	HeadingComponent,
} from "@/components"
import { FC } from "react"

import { FaUser } from "react-icons/fa6"

import { useCart } from "@/hooks/cart/useCart"
import { useScreen } from "@/hooks/screen/useScreen"
import { scrollToSection } from "@/utils/scrollToAnchor"
import { FaMapMarkerAlt } from "react-icons/fa"
import style from "./cart.module.scss"

export const Cart: FC = () => {
	const { setContentHandler } = useScreen()
	const { products } = useCart()
	return (
		<>
			<HeadingComponent
				text="Корзина"
				length={products.length}
				style={{ marginTop: "40px" }}
			/>
			<div className={style.cart}>
				<CartProductComponent products={products} />
				<CartInfoComponent
					anchorHanlder={scrollToSection}
					products={products}
				/>
				<div className={style.order}>
					<div className={style.box}>
						<h5 className={style.title}>
							<span>Информация о получателе</span>
						</h5>
						<div className={style.out}>
							<ButtonComponent
								id="#section-authorization"
								className={style.button}
								onClick={() => setContentHandler(<AuthComponent />)}
							>
								<FaUser />
								Войдите в систему или зарегистрируйтесь
							</ButtonComponent>
						</div>
					</div>
					<div className={style.box}>
						<h5 className={style.title}>
							<span>Детали доставки </span>
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
