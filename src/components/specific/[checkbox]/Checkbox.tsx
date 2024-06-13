"use client"

import { FieldComponent } from "@/components/field-component/Field-component"
import cn from "classnames"
import { FC } from "react"
import { MdCheck } from "react-icons/md"
import style from "./checkbox.module.scss"
import { ICheckboxProps } from "./Checkbox.props"

export const Checkbox: FC<ICheckboxProps> = ({
	isChecked,
	customName,
	...props
}) => {
	return (
		<div className={style.checkbox}>
			<label className={style.label}>
				<FieldComponent
					type="checkbox"
					checked={isChecked}
					className={style.input}
					{...props}
				/>
				<span
					className={cn(style.customCheckbox, { [style.checked]: isChecked })}
				>
					<span className={style.checkmark}>
						<MdCheck />
					</span>
				</span>
				{customName}
			</label>
		</div>
	)
}
