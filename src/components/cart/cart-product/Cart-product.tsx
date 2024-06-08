"use client"

import { Button, CartRangeComponent, Price } from "@/components"
import { useCart } from "@/hooks/cart/useCart"
import { useNotification } from "@/hooks/useNotification"
import { ICartProduct } from "@/interfaces/cart.interface"
import { hostSourceImages } from "@/utils/hostSource"
import cn from "classnames"
import Image from "next/image"
import { FC } from "react"
import { IoResizeOutline } from "react-icons/io5"
import { MdInvertColors, MdOutlineDiscount } from "react-icons/md"
import style from "./cart-product.module.scss"

interface ICartProductComponentProps {
	products: ICartProduct[]
}
export const CartProductComponent: FC<ICartProductComponentProps> = ({
	products,
}) => {
	const { removeFromCart } = useCart()
	const { addNotification } = useNotification()

	return (
		<div className={style.cart}>
			{products.length ? (
				products.map((product) => (
					<div className={style.product} key={product.id}>
						<div className={style.content}>
							<div className={style.image}>
								<Image
									src={hostSourceImages(product.poster)}
									alt={product.title}
									width={90}
									height={120}
								/>
							</div>
							<div className={style.description}>
								<div className={style.description_price}>
									<Price
										className={style.number}
										price={product.price * product.productQuantity}
										discount={product.discount}
										size="1xxl"
										orientation="column"
									/>
									<Button btnType="promo" title="Скоро будет доступно" />
								</div>
								<h4 className={style.title}>{product.title}</h4>
								<div className={style.items}>
									{product.selectedColor && (
										<div className={style.item}>
											<MdInvertColors />
											<span>
												Цвет: <small>{product.selectedColor}</small>
											</span>
										</div>
									)}
									{product.selectedSize && (
										<div className={style.item}>
											<IoResizeOutline />
											<span>
												Размер:
												<small>{product.selectedSize}</small>
											</span>
										</div>
									)}
									<div className={style.item}>
										<MdOutlineDiscount />
										<span>
											На складе:
											<small>{product.quantity}</small>
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className={style.actions}>
							<div className={cn(style.action, style.range)}>
								<CartRangeComponent
									quantity={product.productQuantity}
									text={false}
									product={product}
								/>
							</div>
							<div className={style.action}>
								<Button
									title="Убрать из корзины"
									btnType="delete"
									onClick={() => {
										addNotification({
											message: "Убрать товар из корзины ?",
											options: { background: "Black", notifyType: "Dialog" },
											onConfirm() {
												removeFromCart({ id: product.id })
											},
										})
									}}
								/>
							</div>
							<div className={style.price}>
								<Price
									className={style.number}
									price={product.price * product.productQuantity}
									discount={product.discount}
									size="1xxl"
									orientation="row"
								/>
								<Button btnType="promo" title="Скоро будет доступно" />
							</div>
						</div>
					</div>
				))
			) : (
				<span className={style.empty}>Корзина пуста</span>
			)}
		</div>
	)
}
