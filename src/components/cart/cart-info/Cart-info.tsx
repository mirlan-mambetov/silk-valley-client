"use client"

import {
	ButtonComponent,
	DeliverComponent,
	ProductPriceComponent,
} from "@/components"
import cn from "classnames"
import { FC, useEffect } from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import { MdOutlineBorderColor } from "react-icons/md"

import { useCartPriceCalculate } from "@/hooks/cart/useCartPriceCalculate"
import { useDeliver } from "@/hooks/deliver/useDeliver"
import { useDialog } from "@/hooks/dialog/useDialog"
import { useScreen } from "@/hooks/screen/useScreen"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { ICartProduct } from "@/interfaces/cart.interface"
import { useRouter } from "next/navigation"
import style from "./cart-info.module.scss"

interface ICartInfoComponentProps {
	anchorHanlder: (id: string) => void
	products: ICartProduct[]
}
export const CartInfoComponent: FC<ICartInfoComponentProps> = ({
	anchorHanlder,
	products,
}) => {
	const { setContentHandler } = useScreen()
	const { totalPrice, totalDiscount } = useCartPriceCalculate(products)
	const { address, isConfirm } = useDeliver()
	const { openDialogHandler } = useStoreActions()
	const { isConfirm: confirmDialog } = useDialog()
	const { push } = useRouter()

	useEffect(() => {
		if (confirmDialog) {
			push("/checkout")
		}
	}, [confirmDialog])
	return (
		<div className={style.info}>
			<div className={style.wrap}>
				<ButtonComponent
					className={style.deliver}
					onClick={() => setContentHandler(<DeliverComponent />)}
				>
					<span>
						{address.city && address.road
							? `${address.city.replace("город", "г.")}. ${address.road}`
							: address.town && address.road
							? `${address.town}. ${address.road}`
							: address.village && address.road
							? `${address.village}. ${address.road}`
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
					disabled={!isConfirm}
					className={style.button}
					onClick={() => {
						openDialogHandler({
							message: "Вы уверены в правильности данных?",
							type: "dialog",
						})
						anchorHanlder("#section-authorization")
					}}
				>
					<MdOutlineBorderColor />
					<span>Оформить заказ</span>
				</ButtonComponent>
			</div>
		</div>
	)
}
