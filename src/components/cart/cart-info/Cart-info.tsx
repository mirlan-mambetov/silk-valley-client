"use client"

import {
	ButtonComponent,
	DeliverComponent,
	ProductPriceComponent,
} from "@/components"
import cn from "classnames"
import { FC } from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import { MdOutlineBorderColor } from "react-icons/md"

import { useCartPriceCalculate } from "@/hooks/cart/useCartPriceCalculate"
import { useDeliver } from "@/hooks/deliver/useDeliver"
import { useScreen } from "@/hooks/screen/useScreen"
import { ICartProducts } from "@/interfaces/cart.interface"
import style from "./cart-info.module.scss"

interface ICartInfoComponentProps {
	anchorHanlder: (id: string) => void
	products: ICartProducts[]
}
export const CartInfoComponent: FC<ICartInfoComponentProps> = ({
	anchorHanlder,
	products,
}) => {
	const { setContentHandler } = useScreen()
	const { totalPrice, totalDiscount } = useCartPriceCalculate(products)
	const { address } = useDeliver()
	return (
		<div className={style.info}>
			<div className={style.wrap}>
				<ButtonComponent
					className={style.deliver}
					onClick={() => setContentHandler(<DeliverComponent />)}
				>
					<span>
						{address.city || address.town || address.village
							? address.city || address.town || address.village
							: "Выбрать адрес доставки"}
					</span>
					<small>
						<FaMapMarkerAlt />
					</small>
				</ButtonComponent>
				<div className={style.box}>
					<span>Товары, {products.length}шт</span>
					<ProductPriceComponent
						size="1xxl"
						className={style.price}
						price={totalPrice}
					/>
				</div>
				<div className={cn(style.box, style.profit)}>
					<span>Выгода</span>
					<ProductPriceComponent
						className={style.total}
						price={totalDiscount}
						size="1xxl"
					/>
				</div>
				<div className={style.box}>
					<span>Итого</span>
					<ProductPriceComponent className={style.total} price={totalPrice} />
				</div>

				<ButtonComponent
					className={style.button}
					onClick={() => anchorHanlder("#section-authorization")}
				>
					<MdOutlineBorderColor />
					<span>Оформить заказ</span>
				</ButtonComponent>
			</div>
		</div>
	)
}
