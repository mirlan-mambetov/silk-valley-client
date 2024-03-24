"use client"

import { ButtonComponent } from "@/components/button/Button"
import { useExistInCart } from "@/hooks/cart/useExistInCart"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { IProduct } from "@/interfaces/product.interface"
import { useRouter } from "next/navigation"
import { FC } from "react"

interface IProductActionsComponentProps {
	data: IProduct
	disabled?: boolean
	color?: string
	size?: string
}

/**
 * @deprecated This Component is deprecated on next updating
 */
export const ProductActionsComponent: FC<IProductActionsComponentProps> = ({
	data,
	disabled,
	color,
	size,
}) => {
	const { push } = useRouter()
	const { isExist } = useExistInCart(data)
	const { openNotifyHandler, addToCart } = useStoreActions()

	return (
		<>
			{isExist ? (
				<ButtonComponent
					disabled={disabled}
					aria-label="Перейти к корзине"
					btnType="cart"
					onClick={() => push("/cart")}
				>
					Перейти к корзине
				</ButtonComponent>
			) : (
				<ButtonComponent
					disabled={disabled}
					aria-label="Просмотр"
					btnType="cart"
					onClick={() => {
						addToCart({ product: { ...data, quantity: 1, size, color } })
						openNotifyHandler("Товар добавлен в корзину")
					}}
				/>
			)}
		</>
	)
}
