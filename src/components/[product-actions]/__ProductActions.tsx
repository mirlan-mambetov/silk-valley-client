"use client"

import { Button } from "@/components"
import { useLoader } from "@/hooks/app/useLoader"
import { useCart } from "@/hooks/cart/useCart"
import { useExistInCart } from "@/hooks/cart/useExistInCart"
import { useAttributes } from "@/hooks/useAttributes"
import { useNotification } from "@/hooks/useNotification"
import cn from "classnames"
import { useRouter } from "next/navigation"
import { FC } from "react"
import style from "./__productActions.module.scss"
import { IProductActionsProps } from "./Product-actions.props"

export const __ProductActions: FC<IProductActionsProps> = ({
	actionType,
	alias,
	product,
	btnSize,
	disable,
}) => {
	const { push } = useRouter()
	const { isExist } = useExistInCart(product)
	const { isLoading, setLoadingHandler } = useLoader()
	const { addToCart } = useCart()
	const { addNotification } = useNotification()
	const {
		payload: { selectedColor, selectedSize },
	} = useAttributes()

	const addToCartHandler = async () => {
		if (!selectedColor) {
			return addNotification({
				message: "Выберите цвет",
				options: { background: "Black" },
			})
		} else if (!selectedSize) {
			return addNotification({
				message: "Выберите размер",
				options: { background: "Black" },
			})
		}
		setLoadingHandler()
		await new Promise<void>((resolve) => {
			setTimeout(() => {
				addToCart({
					product: {
						...product,
						selectedColor,
						selectedSize,
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
						<Button
							className={cn(style.button, {
								[style.xl1]: btnSize === "1xl",
								[style.xl2]: btnSize === "2xl",
							})}
							aria-label="Перейти к корзине"
							btnType="cart"
							onClick={() => push("/cart")}
						>
							Перейти к корзине
						</Button>
					) : (
						<Button
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
				<Button
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
				</Button>
			)
		default:
			return (
				<Button
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
				</Button>
			)
	}
}
