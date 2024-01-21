"use client"

import {
	ButtonComponent,
	CartInfoComponent,
	CartRangeComponent,
	ProductDiscountComponent,
	ProductPriceComponent,
} from "@/components"
import Image from "next/image"
import { FC } from "react"
import { AiOutlineLike } from "react-icons/ai"
import { SiCachet } from "react-icons/si"
import { CART_DATA } from "./cart.data"

import style from "./cart.module.scss"

export const Cart: FC = () => {
	const data = CART_DATA
	return (
		<div className={style.cart}>
			<div className={style.products}>
				{data.map((product) => (
					<div className={style.product} key={product.id}>
						<div className={style.poster}>
							<Image
								src={product.poster}
								alt={product.title}
								width={110}
								height={150}
							/>
						</div>
						<div className={style.content}>
							<div className={style.name}>
								<h4 className={style.title}>{product.title}</h4>
								<div className={style.item}>
									<AiOutlineLike />
									<span>Есть доставка</span>
								</div>
								<div className={style.item}>
									<SiCachet />
									<span>Онлайн оплата</span>
								</div>
								<div className={style.range}>
									<CartRangeComponent text={false} />
								</div>
							</div>
							<div className={style.price}>
								<div className={style.button}>
									<ButtonComponent type="promo" />
								</div>
								<ProductPriceComponent
									className={style.number}
									price={product.price}
									discount={product.discount}
									size="1xxl"
								/>
							</div>
							<div className={style.discount}>
								<ProductDiscountComponent product={product} type="default" />
							</div>
						</div>
					</div>
				))}
			</div>
			<CartInfoComponent />
		</div>
	)
}
