"use client"

import { ButtonComponent, MapIconComponent, PriceComponent } from "@/components"
import { showDestinationName } from "@/helpers/showDestinationName"
import { useCart } from "@/hooks/cart/useCart"
import { useDeliver } from "@/hooks/deliver/useDeliver"
import { useScreen } from "@/hooks/screen/useScreen"
import { useUser } from "@/hooks/user/useUser"
import { ICartProduct } from "@/interfaces/cart.interface"
import cn from "classnames"
import { useRouter } from "next/navigation"
import { FC } from "react"
import style from "./cart-info.module.scss"

interface ICartInfoComponentProps {
	anchorHanlder: (id: string) => void
	products: ICartProduct[]
}
export const CartInfoComponent: FC<ICartInfoComponentProps> = ({
	products,
}) => {
	const { setContentHandler } = useScreen()
	const { totalDiscount, totalPrice } = useCart()
	const { address, isConfirm } = useDeliver()
	const { user } = useUser()
	const { push } = useRouter()

	return (
		<div className={style.info}>
			<div className={style.wrap}>
				<ButtonComponent
					className={style.deliver}
					// onClick={() => setContentHandler(<DeliverComponent />)}
				>
					<span>{showDestinationName(address)}</span>
					<MapIconComponent />
				</ButtonComponent>
				<div className={style.box}>
					<span>Товары, {products.length}шт</span>
					<PriceComponent
						size="1xxl"
						className={style.price}
						price={totalPrice}
					/>
				</div>
				{totalDiscount ? (
					<div className={cn(style.box, style.profit)}>
						<span>Выгода</span>
						<PriceComponent
							className={style.profitPrice}
							price={totalDiscount}
							size="1xxl"
						/>
					</div>
				) : null}
				<div className={style.box}>
					<span className={style.total}>Итого</span>
					<PriceComponent className={style.total} price={totalPrice} />
				</div>
				<ButtonComponent
					btnType="placeOrder"
					disabled={!user || !isConfirm || !products.length}
					onClick={() => push("/checkout")}
				>
					Перейти к оформлению
				</ButtonComponent>
			</div>
		</div>
	)
}
