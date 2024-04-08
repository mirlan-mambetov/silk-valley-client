"use client"

import {
	AuthComponent,
	ButtonComponent,
	CartInfoComponent,
	CartProductComponent,
	DeliverComponent,
	DeliverDetailComponent,
	HeadingComponent,
} from "@/components"
import { FC } from "react"

import { FaUser } from "react-icons/fa6"

import { useCart } from "@/hooks/cart/useCart"
import { useDeliver } from "@/hooks/deliver/useDeliver"
import { useScreen } from "@/hooks/screen/useScreen"
import { useUser } from "@/hooks/user/useUser"
import { scrollToSection } from "@/utils/scrollToAnchor"
import { FaMapMarkerAlt } from "react-icons/fa"
import style from "./cart.module.scss"

export const Cart: FC = () => {
	const { setContentHandler } = useScreen()
	const { products } = useCart()
	const { address } = useDeliver()
	const { user } = useUser()

	return (
		<>
			<HeadingComponent text="Корзина" length={products.length} />
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
							{user ? (
								<div className={style.user}>
									<div className={style.user_field}>
										<small>Имя: </small>
										<span>{user.name}</span>
									</div>
									<div className={style.user_field}>
										<small>Email: </small>
										<span>{user.email}</span>
									</div>
									<div className={style.user_field}>
										<small>Телефон: </small>
										<span>{user.phoneNumber}</span>
									</div>
								</div>
							) : (
								<ButtonComponent
									id="#section-authorization"
									className={style.button}
									onClick={() => setContentHandler(<AuthComponent />)}
								>
									<FaUser />
									Войдите в систему или зарегистрируйтесь
								</ButtonComponent>
							)}
						</div>
					</div>
					<div className={style.box}>
						<h5 className={style.title}>
							<span>Детали доставки </span>
						</h5>
						{Object.values(address).some((value) => value?.length) ? (
							<DeliverDetailComponent position="default" />
						) : (
							<div className={style.out}>
								<ButtonComponent
									className={style.button}
									onClick={() => setContentHandler(<DeliverComponent />)}
								>
									<FaMapMarkerAlt />
									Выберите координаты
								</ButtonComponent>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
