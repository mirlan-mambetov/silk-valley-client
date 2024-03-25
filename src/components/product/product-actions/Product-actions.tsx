"use client"

import { ButtonComponent } from "@/components/button/Button"
import { useExistInCart } from "@/hooks/cart/useExistInCart"
import { useSelectedAttributes } from "@/hooks/cart/useSelectedAttributes"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { IProduct } from "@/interfaces/product.interface"
import { useRouter } from "next/navigation"
import { FC } from "react"
import style from "./product.actions.module.scss"

interface IProductActionsComponentProps {
	alias: string
	disable?: boolean
	actionType: "toCart" | "toView"
	product: IProduct
}
export const ProductActionsComponent: FC<IProductActionsComponentProps> = ({
	alias,
	disable,
	actionType,
	product,
}) => {
	const { push } = useRouter()
	const { isExist } = useExistInCart(product)
	const { addToCart, openNotifyHandler } = useStoreActions()
	const { color, size } = useSelectedAttributes()

	switch (actionType) {
		case "toCart":
			return (
				<>
					{isExist ? (
						<ButtonComponent
							className={style.button}
							aria-label="Перейти к корзине"
							btnType="cart"
							onClick={() => push("/cart")}
						>
							Перейти к корзине
						</ButtonComponent>
					) : (
						<ButtonComponent
							disabled={!color || !size}
							aria-label="Просмотр"
							className={style.button}
							btnType="cart"
							onClick={() => {
								addToCart({ product: { ...product, quantity: 1, size, color } })
								openNotifyHandler("Товар добавлен в корзину")
							}}
						/>
					)}
				</>
			)

		case "toView":
			return (
				<ButtonComponent
					disabled={disable}
					className={style.button}
					aria-label="Просмотр"
					btnType="cart"
					onClick={() => push(`/product/${alias}`)}
				>
					Просмотр
				</ButtonComponent>
			)
		default:
			return (
				<ButtonComponent
					disabled={disable}
					className={style.button}
					aria-label="Просмотр"
					btnType="cart"
					onClick={() => push(`/product/${alias}`)}
				>
					Просмотр
				</ButtonComponent>
			)
	}
}
