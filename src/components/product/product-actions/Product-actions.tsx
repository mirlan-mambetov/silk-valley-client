"use client"

import { ButtonComponent } from "@/components/button/Button"
import { useExistInCart } from "@/hooks/cart/useExistInCart"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { IProduct } from "@/interfaces/product.interface"
import cn from "classnames"
import { useRouter } from "next/navigation"
import { FC } from "react"
import style from "./product.actions.module.scss"

interface IProductActionsComponentProps {
	alias: string
	disable?: boolean
	actionType: "toCart" | "toView"
	size?: string | undefined
	color?: string | undefined
	product: IProduct
	btnSize?: "1xl" | "2xl"
}
export const ProductActionsComponent: FC<IProductActionsComponentProps> = ({
	alias,
	disable,
	actionType,
	product,
	size,
	color,
	btnSize,
}) => {
	const { push } = useRouter()
	const { isExist } = useExistInCart(product)
	const { addToCart, openNotifyHandler } = useStoreActions()

	switch (actionType) {
		case "toCart":
			return (
				<>
					{isExist ? (
						<ButtonComponent
							className={cn(style.button, {
								[style.xl1]: btnSize === "1xl",
								[style.xl2]: btnSize === "2xl",
							})}
							aria-label="Перейти к корзине"
							btnType="cart"
							onClick={() => push("/cart")}
						>
							Перейти к корзине
						</ButtonComponent>
					) : (
						<ButtonComponent
							aria-label="Просмотр"
							className={cn(style.button, {
								[style.xl1]: btnSize === "1xl",
								[style.xl2]: btnSize === "2xl",
							})}
							btnType="cart"
							onClick={() => {
								if (product.sizes?.length && typeof size === "undefined") {
									openNotifyHandler({ text: "Выберите размеры" })
								} else {
									addToCart({
										product: {
											...product,
											selectedColor: color,
											selectedSize: size,
											productQuantity: 1,
										},
									})
									openNotifyHandler({ text: "Товар добавлен в корзину" })
								}
							}}
						/>
					)}
				</>
			)

		case "toView":
			return (
				<ButtonComponent
					disabled={disable}
					className={cn(style.button, {
						[style.xl1]: btnSize === "1xl",
						[style.xl2]: btnSize === "2xl",
					})}
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
					className={cn(style.button, {
						[style.xl1]: btnSize === "1xl",
						[style.xl2]: btnSize === "2xl",
					})}
					aria-label="Просмотр"
					btnType="cart"
					onClick={() => push(`/product/${alias}`)}
				>
					Просмотр
				</ButtonComponent>
			)
	}
}
