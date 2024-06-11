"use client"

import { Button, CartRange, DestinationPoin, Price } from "@/components"
import {
	cartOverlayVariantMotion,
	cartVariantMotion,
} from "@/framer-motion/cart"
import { useCart } from "@/hooks/cart/useCart"
import { hostSourceImages } from "@/utils/hostSource"
import cn from "classnames"
import { motion } from "framer-motion"
import Image from "next/image"
import { FC, useEffect, useRef } from "react"
import style from "./cart.module.scss"
import { ICartProps } from "./Cart.props"

export const Cart: FC<ICartProps> = ({ ...props }) => {
	const { state, closeCart, removeFromCart, clearCart } = useCart()
	const cartRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (cartRef.current && !cartRef.current.contains(event.target)) {
				closeCart()
			}
		}
		document.addEventListener("click", handleClickOutside)
		return () => {
			document.removeEventListener("click", handleClickOutside)
		}
	}, [state])
	return (
		<>
			<motion.div
				initial={false}
				variants={cartVariantMotion}
				animate={state.isShow ? "open" : "closed"}
				className={style.checkout}
				ref={cartRef}
			>
				<Button
					className={style.close}
					onClick={() => closeCart()}
					btnType="closed"
					size={"xl2"}
				></Button>
				<div className={style.head}>
					<span>Товары, {state.products.length}шт</span>
				</div>
				{state.products.length ? (
					<>
						<div className={style.products}>
							{state?.products.map((product) => (
								<div className={style.product} key={product.id}>
									<div className={style.content}>
										<div className={style.image}>
											<Image
												src={hostSourceImages(product.poster)}
												alt={product.title}
												width={100}
												height={140}
											/>
											<div className={style.remove}>
												<Button
													onClick={() =>
														removeFromCart({ productId: product.id })
													}
													title="Убрать из корзины"
													btnType="delete"
												/>
											</div>
										</div>
										<div className={style.description}>
											<h5 className={style.title}>{product.title}</h5>
											<div className={style.items}>
												<div className={style.item}>
													Цвет: <span>{product.selectedColor}</span>
												</div>
												<div className={style.item}>
													Размер: <span>{product.selectedSize}</span>
												</div>
											</div>
										</div>
									</div>
									<div className={style.action}>
										<Price price={product.price} size="1xl" />
										<CartRange
											text={false}
											product={product}
											quantity={product.quantityInCart || 1}
										/>
									</div>
								</div>
							))}
						</div>
						<div className={style.counters}>
							<div className={style.counter}>
								Скидка: <span>{state.totalDiscount || "Н/Д"}</span>
							</div>
							<div className={style.counter}>
								Доставка:
								<span>
									<DestinationPoin />
								</span>
							</div>
							<div className={cn(style.counter, style.total)}>
								Итого: <Price price={state.totalCache} />
							</div>
						</div>

						<Button
							btnType="placeOrder"
							// disabled={!user || !pointDeliverLocation?.location}
							// onClick={() => push("/checkout")}
						>
							Перейти к оформлению
						</Button>
					</>
				) : (
					<span className={style.empty}>Корзина пуста</span>
				)}
			</motion.div>
			<motion.div
				initial={false}
				animate={state.isShow ? "open" : "closed"}
				variants={cartOverlayVariantMotion}
				className={style.overlay}
			></motion.div>
		</>
	)
}
