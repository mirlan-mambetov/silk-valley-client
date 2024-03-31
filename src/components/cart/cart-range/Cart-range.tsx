"use client"

import { ButtonComponent } from "@/components"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { IProduct } from "@/interfaces/product.interface"
import cn from "classnames"
import { DetailsHTMLAttributes, FC } from "react"
import { LuMinus, LuPlus } from "react-icons/lu"
import style from "./cart-range.module.scss"

interface ICartRangeComponentProps
	extends DetailsHTMLAttributes<HTMLDivElement> {
	text?: boolean
	product: IProduct
	quantity: number
}
export const CartRangeComponent: FC<ICartRangeComponentProps> = ({
	text = true,
	className,
	product,
	quantity,
	...props
}) => {
	const { changedQuantity } = useStoreActions()
	return (
		<div className={cn(style.quantity, className)} {...props}>
			{text && <small>Количество</small>}
			<div className={style.quantity_item}>
				<ButtonComponent
					onClick={() => changedQuantity({ type: "minus", id: product.id })}
				>
					<LuMinus />
				</ButtonComponent>
				<span>{quantity}</span>
				<ButtonComponent
					onClick={() => changedQuantity({ type: "plus", id: product.id })}
				>
					<LuPlus />
				</ButtonComponent>
			</div>
		</div>
	)
}
