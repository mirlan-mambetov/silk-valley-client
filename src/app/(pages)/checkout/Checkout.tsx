"use client"

import { FieldComponent, HeadingComponent } from "@/components"
import { useCart } from "@/hooks/cart/useCart"
import cn from "classnames"
import Image from "next/image"
import { useState } from "react"
import style from "./checkout.module.scss"

export const Checkout = () => {
	const [methodCard, setMethodCard] = useState(false)
	const [methodCache, setMethodCache] = useState(false)
	const { products, totalDiscount, totalPrice } = useCart()

	return (
		<>
			<section>
				<div className="container">
					<HeadingComponent text="Выберите метод оплаты" />
					<div className={style.wrap}>
						<div className={style.payments}>
							<div className={style.method}>
								<div className={style.icons}>
									<div
										className={cn(style.icon, style.iconVisa)}
										title="Visa"
									></div>
									<div
										className={cn(style.icon, style.masterCard)}
										title="MasterCard"
									></div>
									<div
										className={cn(style.icon, style.maestro)}
										title="Maestro"
									></div>
									<div
										className={cn(style.icon, style.unionPay)}
										title="UnionPay"
									></div>
									<div
										className={cn(style.icon, style.elcard)}
										title="Элкарт"
									></div>
								</div>
								<FieldComponent
									type="checkbox"
									onChange={() => setMethodCard(!methodCard)}
									disabled={methodCache}
								/>
							</div>
							<div className={style.method}>
								<Image
									width={300}
									height={300}
									src={"/images/mbank.png"}
									alt="mbank"
								/>
								<FieldComponent type="checkbox" checked={false} disabled />
							</div>
							<div className={style.method}>
								<strong>Наличными при доставке</strong>
								<FieldComponent
									type="checkbox"
									disabled={methodCard}
									onChange={() => setMethodCache(!methodCache)}
								/>
							</div>
						</div>
						<div className={style.policy}>
							<h5>Внимание! Ознакомтесь с правилами</h5>

							<ul className={style.description}>
								<li>При оформлении заказа:</li>
								<li>
									Если оформить заказ, выбрав пунк 'оплата наличными'. При этом
									если клиент по окончанию доставки товара не будет оформлять,
									по какой-либо причине не будет произведена оплата, то, по
									приеме правил соглашений сторон, будет возмещена стоимость
									товара(полная) + 12% неустойки.
								</li>
								<li>
									Чтобы не было недопониманий сторон, просим ознакомится с
									<a href="#">Правила пользования и (соглашения)</a>
								</li>
							</ul>
						</div>
						<div className={style.policy}>
							<h5>Товары, {products.length}шт</h5>
							<div className={style.items}>
								{products.map((product) => (
									<strong key={product.id}># {product.title}</strong>
								))}
								<div className={style.total}>
									Итого:
									<span>
										{totalPrice} <small>KGS</small>
									</span>
								</div>
								{/* <span>
									<small>Итого:</small>
									<ProductPriceComponent price={totalPrice} />
								</span>
								<span>
									<small>Скида:</small>
									{totalDiscount ? totalDiscount : "нет"}
								</span> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
