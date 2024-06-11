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
import style from "./product-actions.module.scss"
import { IProductActionsProps } from "./ProductActions.props"

export const ProductActions: FC<IProductActionsProps> = ({
	actionType,
	alias,
	product,
	btnSize,
	disable,
}) => {
	const { push } = useRouter()
	const { isExist } = useExistInCart(product)
	const { isLoading, setLoadingHandler } = useLoader()
	const { addToCart, showCart } = useCart()
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
						quantityInCart: 1,
					},
				})
				resolve()
			}, 3000)
		})
	}
	switch (actionType) {
		case "toCart":
			return !isExist ? (
				<Button
					isLoading={isLoading}
					aria-label="В корзину"
					className={cn(style.button, {
						[style.xl1]: btnSize === "1xl",
						[style.xl2]: btnSize === "2xl",
					})}
					btnType="cart"
					onClick={addToCartHandler}
				/>
			) : (
				<Button
					disabled={disable}
					className={cn(style.button, {
						[style.xl1]: btnSize === "1xl",
						[style.xl2]: btnSize === "2xl",
					})}
					aria-label="Открыть корзину"
					btnType="cart"
					onClick={() => showCart()}
				>
					Открыть корзину
				</Button>
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
