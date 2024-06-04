"use client"

import {
	AuthComponent,
	ButtonComponent,
	CartInfoComponent,
	CartProductComponent,
	HeadingComponent,
	MapIconComponent,
} from "@/components"
import { FC } from "react"

import { showDestinationName } from "@/helpers/showDestinationName"
import { useCart } from "@/hooks/cart/useCart"
import { useDeliver } from "@/hooks/deliver/useDeliver"
import { useScreen } from "@/hooks/screen/useScreen"
import { useUser } from "@/hooks/user/useUser"
import { scrollToSection } from "@/utils/scrollToAnchor"
import { useRouter } from "next/navigation"
import { BsEnvelopeAt } from "react-icons/bs"
import { FaUser } from "react-icons/fa6"
import { FiEdit2 } from "react-icons/fi"
import { MdOutlinePhone } from "react-icons/md"
import style from "./cart.module.scss"

export const Cart: FC = () => {
	const { setContentHandler } = useScreen()
	const { products } = useCart()
	const { address } = useDeliver()
	const { user } = useUser()
	const { push } = useRouter()

	return (
		<>
			<HeadingComponent text="Корзина" length={products.length} />
			<div className={style.cart}>
				<CartProductComponent products={products} />
				<CartInfoComponent
					anchorHanlder={scrollToSection}
					products={products}
				/>
				<div className={style.information}>
					<div className={style.info}>
						{user ? (
							<>
								<div className={style.user}>
									<div className={style.userField}>
										<small>
											<BsEnvelopeAt />
										</small>
										<span>{user.email}</span>
									</div>
									<div className={style.userField}>
										<small>
											<MdOutlinePhone />
										</small>
										<span>{user.phoneNumber}</span>
									</div>
								</div>
								<ButtonComponent
									className={style.edit}
									title="Изменить профиль"
									onClick={() => push("/user")}
								>
									<FiEdit2 fontSize={20} />
								</ButtonComponent>
							</>
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
					<div className={style.info}>
						{Object.values(address).some((value) => value?.length) ? (
							<>
								<div className={style.deliver}>
									{showDestinationName(address)}
									{/* <DeliverActionComponent /> */}
								</div>
								<ButtonComponent
									className={style.edit}
									title="Выбрать координаты доставки"
									// onClick={() => setContentHandler(<DeliverComponent />)}
								>
									<FiEdit2 fontSize={20} />
								</ButtonComponent>
							</>
						) : (
							<ButtonComponent
								className={style.button}
								// onClick={() => setContentHandler(<DeliverComponent />)}
							>
								<MapIconComponent />
								Выберите координаты
							</ButtonComponent>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
