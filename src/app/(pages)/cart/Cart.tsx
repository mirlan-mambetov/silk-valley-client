"use client"

import { FC } from "react"

import style from "./cart.module.scss"

export const Cart: FC = () => {
	// const { products } = useCart()
	// const { screenHandle } = useScreen()
	// const { pointDeliverLocation } = useMap()
	// const { user } = useUser()
	// const { push } = useRouter()

	return (
		<>
			{/* <Heading text="Корзина" length={products.length} /> */}
			<div className={style.cart}>
				{/* <CartProductComponent products={products} /> */}
				{/* <CartInfoComponent
					anchorHanlder={scrollToSection}
					products={products}
				/> */}
				{/* <div className={style.information}>
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
								<Button
									className={style.edit}
									title="Изменить профиль"
									onClick={() => push("/user")}
								>
									<FiEdit2 fontSize={20} />
								</Button>
							</>
						) : (
							<Button
								id="#section-authorization"
								className={style.button}
								onClick={() => screenHandle({ content: <Auth /> })}
							>
								<FaUser />
								Войдите в систему или зарегистрируйтесь
							</Button>
						)}
					</div>
					<div className={style.info}>
						<div className={style.deliver}>
							{showDestinationName(pointDeliverLocation)}
						</div>
						<Button
							className={style.edit}
							title="Выбрать координаты доставки"
							onClick={() => screenHandle({ content: <SelectLocation /> })}
						>
							<FiEdit2 fontSize={20} />
						</Button>
					</div>
				</div> */}
			</div>
		</>
	)
}
