"use client"

import {
	ButtonComponent,
	CartRangeComponent,
	ProductDiscountComponent,
	ProductPriceComponent,
} from "@/components"
import { IProduct } from "@/interfaces/product.interface"
import cn from "classnames"
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
		<div className={style.cart}>
			{products.map((product) => (
				<div className={style.product} key={product.id}>
					<div className={style.content}>
						<div className={style.image}>
							<Image
								src={product.poster}
								alt={product.title}
								width={90}
								height={120}
							/>
						</div>
						<div className={style.description}>
							<h4 className={style.title}>{product.title}</h4>
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
							<div className={style.price}>
								<ProductPriceComponent
									className={style.number}
									price={product.price}
								/>
								<ButtonComponent className={style.promo} type="promo" />
							</div>
						</div>
					</div>
					<div className={style.actions}>
						<div className={cn(style.action, style.discount)}>
							<ProductDiscountComponent product={product} />
						</div>
						<div className={cn(style.action, style.range)}>
							<CartRangeComponent text={false} />
						</div>
						<div className={style.action}>
							<ButtonComponent type="delete" />
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
