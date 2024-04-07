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
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { useUser } from "@/hooks/user/useUser"
import { scrollToSection } from "@/utils/scrollToAnchor"
import { FaMapMarkerAlt } from "react-icons/fa"
import { IoMdCheckmark } from "react-icons/io"
import style from "./cart.module.scss"

export const Cart: FC = () => {
	const { setContentHandler } = useScreen()
	const { confirmDeliver, openDialogHandler } = useStoreActions()
	const { products } = useCart()
	const { address, isConfirm } = useDeliver()
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
										Имя: <span>{user.name}</span>
									</div>
									<div className={style.user_field}>
										Email: <span>{user.email}</span>
									</div>
									<div className={style.user_field}>
										Телефон: <span>{user.phoneNumber}</span>
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
					{Object.values(address).some((value) => value?.length) ? (
						<div className={style.box}>
							<div className={style.out}>
								<ButtonComponent
									className={style.button}
									onClick={() => {
										// openDialogHandler({
										// 	message:
										// 		"Пожалуйста будьте внимательны. Удостоверитесь в правильности данных!",
										// })
										confirmDeliver()
									}}
								>
									<IoMdCheckmark />
									{isConfirm ? "Подтверждено" : "Подтвердить"}
								</ButtonComponent>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</>
	)
}
