"use client"

import { ButtonComponent } from "@/components/button/Button"
import { useRouter } from "next/navigation"
import { FC } from "react"
import style from "./product.actions.module.scss"

interface IProductActionsComponentProps {
	alias: string
	disable?: boolean
}
export const ProductActionsComponent: FC<IProductActionsComponentProps> = ({
	alias,
	disable,
}) => {
	const { push } = useRouter()

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
