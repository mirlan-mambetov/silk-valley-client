"use client"

import {
	ButtonComponent,
	CartRangeComponent,
	ProductPriceComponent,
} from "@/components"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { ICartProducts } from "@/interfaces/cart.interface"
import cn from "classnames"
import Image from "next/image"
import { FC } from "react"
import { IoResizeOutline } from "react-icons/io5"
import { MdInvertColors } from "react-icons/md"
import style from "./cart-product.module.scss"

interface ICartProductComponentProps {
	products: ICartProducts[]
}
export const CartProductComponent: FC<ICartProductComponentProps> = ({
	products,
}) => {
	const { removeFromCart } = useStoreActions()
	return (
		<div className={style.cart}>
			{products.length ? (
				products.map((product) => (
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
								<div className={style.description_price}>
									<ProductPriceComponent
										className={style.number}
										price={product.price * product.quantity}
										discount={product.discount}
										size="1xxl"
										orientation="column"
									/>
									<ButtonComponent btnType="promo" />
								</div>
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
							</div>
						</div>
						<div className={style.actions}>
							<div className={cn(style.action, style.range)}>
								<CartRangeComponent
									quantity={product.quantity}
									text={false}
									product={product}
								/>
							</div>
							<div className={style.action}>
								<ButtonComponent
									btnType="delete"
									onClick={() => removeFromCart({ id: product.id })}
								/>
							</div>
							<div className={style.price}>
								<ProductPriceComponent
									className={style.number}
									price={product.price * product.quantity}
									discount={product.discount}
									size="1xxl"
									orientation="row"
								/>
								<ButtonComponent btnType="promo" />
							</div>
						</div>
					</div>
				))
			) : (
				<span>Товаров нет</span>
			)}
		</div>
	)
}
