"use client"

import { FieldComponent, HeadingComponent } from "@/components"
import Image from "next/image"
import style from "./checkout.module.scss"

export const Checkout = () => {
	return (
		<>
			<section>
				<div className="container">
					<div className={style.head}>
						<HeadingComponent text="Выберите метод оплаты" />
					</div>
					<div className={style.wrap}>
						<div className={style.payments}>
							<div className={style.method}>
								<Image
									width={300}
									height={300}
									src={"/images/visa-mastercard.png"}
									alt="visa-mastercard"
								/>
								<FieldComponent type="checkbox" />
							</div>
							<div className={style.method}>
								<Image
									width={300}
									height={300}
									src={"/images/mbank.png"}
									alt="mbank"
								/>
								<FieldComponent type="checkbox" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
