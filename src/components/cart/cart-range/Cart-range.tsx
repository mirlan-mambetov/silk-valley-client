"use client"

import { Button } from "@/components"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { IProduct } from "@/interfaces/product.interface"
import cn from "classnames"
import { DetailsHTMLAttributes, FC, useState } from "react"
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
	const [minusLoading, setMinusLoading] = useState(false)
	const [plusLoading, setPlusLoading] = useState(false)

	const changeMinusHandler = async () => {
		setMinusLoading(true)
		await new Promise<void>((resolve) => {
			setTimeout(() => {
				changedQuantity({ type: "minus", id: product.id })
				resolve()
			}, 1300)
		})
		setMinusLoading(false)
	}
	const changePlusHandler = async () => {
		setPlusLoading(true)
		await new Promise<void>((resolve) => {
			setTimeout(() => {
				changedQuantity({ type: "plus", id: product.id })
				resolve()
			}, 1300)
		})
		setPlusLoading(false)
	}

	return (
		<div className={cn(style.quantity, className)} {...props}>
			{text && <small>Количество</small>}
			<div className={style.quantity_item}>
				<Button
					disabled={minusLoading || product.quantity == 1}
					isLoading={minusLoading}
					title="Убрать"
					btnType="rangeButton"
					onClick={changeMinusHandler}
				>
					<LuMinus />
				</Button>
				<span>{quantity}</span>
				<Button
					disabled={plusLoading || product.quantity <= 1}
					isLoading={plusLoading}
					title="Добавить"
					btnType="rangeButton"
					onClick={changePlusHandler}
				>
					<LuPlus />
				</Button>
			</div>
		</div>
	)
}
