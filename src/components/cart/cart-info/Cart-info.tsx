"use client"

import { usePlaceOrderMutation } from "@/api/api-payment/api-payment"
import { IPaymentDTO } from "@/api/api-payment/data-transfer"
import {
	ButtonComponent,
	DeliverComponent,
	MapIconComponent,
	ProductPriceComponent,
} from "@/components"
import { EnumOrderStatus } from "@/enums/Payment.enum"
import { useCartPriceCalculate } from "@/hooks/cart/useCartPriceCalculate"
import { useDeliver } from "@/hooks/deliver/useDeliver"
import { useScreen } from "@/hooks/screen/useScreen"
import { useUser } from "@/hooks/user/useUser"
import { ICartProduct } from "@/interfaces/cart.interface"
import cn from "classnames"
import { useRouter } from "next/navigation"
import { FC, useEffect } from "react"
import { MdOutlineBorderColor } from "react-icons/md"
import style from "./cart-info.module.scss"

interface ICartInfoComponentProps {
	anchorHanlder: (id: string) => void
	products: ICartProduct[]
}
export const CartInfoComponent: FC<ICartInfoComponentProps> = ({
	products,
}) => {
	const { setContentHandler } = useScreen()
	const { totalPrice, totalDiscount } = useCartPriceCalculate(products)
	const { address, isConfirm } = useDeliver()
	const [placeOrder, result] = usePlaceOrderMutation()
	const { user } = useUser()
	const { push } = useRouter()

	const placeOrderHandler = async (data: IPaymentDTO) => {
		const products = data.products.map((product) => ({
			...product,
			quantity: product.productQuantity,
		}))
		await placeOrder({ ...data, products }).unwrap()
	}

	useEffect(() => {
		if (result.data?.url) {
			push(result.data.url)
		}
	}, [result.isSuccess])

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
					<MapIconComponent />
				</ButtonComponent>
				<div className={style.box}>
					<span>Товары, {products.length}шт</span>
					<ProductPriceComponent
						size="1xxl"
						className={style.price}
						price={totalPrice}
					/>
				</div>
				{totalDiscount ? (
					<div className={cn(style.box, style.profit)}>
						<span>Выгода</span>
						<ProductPriceComponent
							className={style.profitPrice}
							price={totalDiscount}
							size="1xxl"
						/>
					</div>
				) : null}
				<div className={style.box}>
					<span className={style.total}>Итого</span>
					<ProductPriceComponent className={style.total} price={totalPrice} />
				</div>

				<ButtonComponent
					isLoading={result.isLoading}
					disabled={!user || !isConfirm || !products.length}
					className={style.button}
					onClick={() =>
						placeOrderHandler({
							products,
							status: EnumOrderStatus.PENDING,
							totalPrice,
						})
					}
				>
					<MdOutlineBorderColor />
					<span>Оформить заказ</span>
				</ButtonComponent>
			</div>
		</div>
	)
}
