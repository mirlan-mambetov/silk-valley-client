"use client"

import { ButtonComponent } from "@/components/button/Button"
import { useLoader } from "@/hooks/app/useLoader"
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
	const { isLoading, setLoadingHandler } = useLoader()

	const addToCartHandler = async () => {
		setLoadingHandler()
		await new Promise<void>((resolve) => {
			setTimeout(() => {
				addToCart({
					product: {
						...product,
						selectedColor: color,
						selectedSize: size,
						productQuantity: 1,
					},
				})
				resolve()
			}, 3000)
		})
		openNotifyHandler({
			text: "Товар добавлен в корзину",
			options: {
				position: "bottomCenter",
			},
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
