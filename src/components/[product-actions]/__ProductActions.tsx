"use client"

import { useLoader } from "@/hooks/app/useLoader"
import { useCart } from "@/hooks/cart/useCart"
import { useExistInCart } from "@/hooks/cart/useExistInCart"
import { useNotification } from "@/hooks/useNotification"
import cn from "classnames"
import { useRouter } from "next/navigation"
import { FC } from "react"
import { ButtonComponent } from "../button/Button"
import style from "./__productActions.module.scss"
import { IProductActionsProps } from "./Product-actions.props"

export const __ProductActions: FC<IProductActionsProps> = ({
	actionType,
	alias,
	product,
	btnSize,
	color,
	disable,
	size,
}) => {
	const { push } = useRouter()
	const { isExist } = useExistInCart(product)
	const { isLoading, setLoadingHandler } = useLoader()
	const { addToCart } = useCart()
	const { addNotification } = useNotification()

	const addToCartHandler = async () => {
		setLoadingHandler()
		await new Promise<void>((resolve) => {
			setTimeout(() => {
				addToCart({
					product: {
						...product,
						selectedColor: color,
						selectedSize: size,
					},
				})
				resolve()
			}, 3000)
		})
		addNotification({
			message: "Товар добавлен в корзину",
			options: { background: "Black" },
		})
	}
	switch (actionType) {
		case "toCart":
			return (
				<>
					{isExist && !isLoading ? (
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
							isLoading={isLoading}
							aria-label="Просмотр"
							className={cn(style.button, {
								[style.xl1]: btnSize === "1xl",
								[style.xl2]: btnSize === "2xl",
							})}
							btnType="cart"
							onClick={addToCartHandler}
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
