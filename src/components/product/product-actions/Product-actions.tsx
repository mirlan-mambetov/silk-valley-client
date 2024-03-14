"use client"

import { ButtonComponent } from "@/components/button/Button"
import { useExistInCart } from "@/hooks/cart/useExistInCart"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { IProduct } from "@/interfaces/product.interface"
import { useRouter } from "next/navigation"
import { FC } from "react"

interface IProductActionsComponentProps {
	data: IProduct
}
export const ProductActionsComponent: FC<IProductActionsComponentProps> = ({
	data,
}) => {
	const { push } = useRouter()
	const { isExist } = useExistInCart(data)
	const { addToCart } = useStoreActions()
	return (
		<>
			{isExist ? (
				<ButtonComponent
					aria-label="Перейти к корзине"
					btnType="cart"
					onClick={() => push("/cart")}
				>
					Перейти к корзине
				</ButtonComponent>
			) : (
				<ButtonComponent
					aria-label="В корзину"
					btnType="cart"
					onClick={() => addToCart({ product: { ...data, quantity: 1 } })}
				/>
			)}
		</>
	)
}
