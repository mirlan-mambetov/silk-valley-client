"use client"

import { ButtonComponent } from "@/components"
import { FC } from "react"
import { LuMinus, LuPlus } from "react-icons/lu"
import style from "./cart-range.module.scss"

interface ICartRangeComponentProps {
	text?: boolean
}
export const CartRangeComponent: FC<ICartRangeComponentProps> = ({
	text = true,
}) => {
	return (
		<div className={style.quantity}>
			{text && <small>Количество</small>}
			<div className={style.quantity_item}>
				<ButtonComponent>
					<LuMinus />
				</ButtonComponent>
				<span>1</span>
				<ButtonComponent>
					<LuPlus />
				</ButtonComponent>
			</div>
		</div>
	)
}
