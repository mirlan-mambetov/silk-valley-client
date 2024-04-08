"use client"

import { HeadingComponent } from "@/components"
import style from './checkout.module.scss'

export const Checkout = () => {
	return (
		<>
			<section>
				<div className="container">
					<HeadingComponent text="Произвести оплату" />
					<div className={style.payments}>
            Checkout
          </div>
				</div>
			</section>
		</>
	)
}
