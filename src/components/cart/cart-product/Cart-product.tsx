"use client"

import {
	ButtonComponent,
	CartRangeComponent,
	ProductDiscountComponent,
	ProductPriceComponent,
} from "@/components"
import { IProduct } from "@/interfaces/product.interface"
import Image from "next/image"
import { FC } from "react"
import { IoResizeOutline } from "react-icons/io5"
import { MdInvertColors } from "react-icons/md"
import style from "./cart-product.module.scss"

interface ICartProductComponentProps {
	products: IProduct[]
}
export const CartProductComponent: FC<ICartProductComponentProps> = ({
	products,
}) => {
	return (
		<div className={style.products}>
			{products.map((product) => (
				<div className={style.product} key={product.id}>
					<div className={style.product_image}>
						<Image
							src={product.poster}
							alt={product.title}
							width={110}
							height={140}
						/>
						<ProductDiscountComponent product={product} type="absolute" />
					</div>
					<div className={style.wrap}>
						<div className={style.content}>
							<h3 className={style.title}>{product.title}</h3>
							<div className={style.items}>
								<div className={style.item}>
									<MdInvertColors />
									<span>
										Цвет: <small>Черный</small>
									</span>
								</div>
								<div className={style.item}>
									<IoResizeOutline />
									<span>
										Размер: <small>32x</small>
									</span>
								</div>
							</div>
						</div>
						<div className={style.price}>
							<ProductPriceComponent
								className={style.number}
								price={product.price}
								discount={product.discount}
							/>
							<ButtonComponent type="promo" />
						</div>
						<div className={style.content}>
							<CartRangeComponent text={false} />
						</div>
						<div className={style.action}>
							<ButtonComponent type="delete" title="Убрать из корзины" />
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
