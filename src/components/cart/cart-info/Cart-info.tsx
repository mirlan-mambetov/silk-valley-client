"use client"

import { ButtonComponent, ProductPriceComponent } from "@/components"
import { FC } from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import { MdOutlineBorderColor } from "react-icons/md"

import { useCartPriceCalculate } from "@/hooks/cart/useCartPriceCalculate"
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
	const { totalPrice } = useCartPriceCalculate(products)

	return (
		<div className={style.info}>
			<div className={style.wrap}>
				<ButtonComponent className={style.deliver}>
					<span>Выбрать адрес доставки</span>
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
				<div className={style.box}>
					<span>Итого</span>
					<ProductPriceComponent className={style.total} price={totalPrice} />
				</div>

				<ButtonComponent
					className={style.button}
					onClick={() => anchorHanlder("#section-authorization")}
				>
					<MdOutlineBorderColor />
					<span>Заказать</span>
				</ButtonComponent>
			</div>
		</div>
	)
}
