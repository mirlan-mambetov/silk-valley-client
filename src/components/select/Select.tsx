"use client"

import useOutsiteClick from "@/hooks/useOutsideClick"
import cn from "classnames"
import { useState } from "react"
import { LuSettings2 } from "react-icons/lu"
import style from "./select.module.scss"

export interface ISelectProps<K = string> {
	data: ISelectItem<K>[]
	onChange: (item: ISelectItem<K>) => void
	value?: ISelectItem<K>
	title?: string
	className?: string
	boxShadow?: boolean
}

export interface ISelectItem<K = string> {
	label: string
	key: K
	isDisable?: boolean
}

function SelectComponent<T>({
	data,
	onChange,
	className,
	title,
	value,
	boxShadow,
}: ISelectProps<T>) {
	const { elRef, isShow, setIsShow } = useOutsiteClick(false)
	const [isSelected, setIsSelected] = useState<any>(null)

	return (
		<div className={cn(style.select, className)} ref={elRef}>
			<div
				className={cn(style.select_placeholder, {
					[style.outShadow]: boxShadow,
				})}
				onClick={() => setIsShow(!isShow)}
			>
				<span className={style.title}>
					{isSelected ? isSelected : `${title}`}
				</span>
				{/* <MdOutlineKeyboardArrowDown /> */}
				<LuSettings2 />
			</div>
			{isShow && (
				<div className={style.select_list}>
					{data.map((option, i) => (
						<div
							className={cn(style.select_item, {
								[style.disabled]: option.isDisable,
							})}
							key={i}
							onClick={() => {
								onChange(option)
								setIsSelected(option.label)
								setIsShow(!isShow)
							}}
						>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default SelectComponent
