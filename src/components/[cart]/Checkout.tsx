"use client"

import style from "./checkout.module.scss"

export const Checkout = () => {
	return (
		<>
			<div className={style.checkout}>
				<div className={style.head}>
					<span>Корзина</span>
				</div>
			</div>
			<div className={style.overlay}></div>
		</>
	)
}
