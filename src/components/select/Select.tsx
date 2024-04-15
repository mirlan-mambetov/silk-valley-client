"use client"

import useOutsiteClick from "@/hooks/useOutsideClick"
import cn from "classnames"
import { useState } from "react"
import { IconType } from "react-icons"
import { LuSettings2 } from "react-icons/lu"
import { LoaderComponent } from ".."
import style from "./select.module.scss"

export interface ISelectProps<K = string> {
	data: ISelectItem<K>[] | undefined
	onChange: (item: ISelectItem<K>) => void
	value?: ISelectItem<K>
	title?: string
	className?: string
	TitleIcon?: IconType
	isLoading?: boolean
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
	isLoading,
	TitleIcon,
}: ISelectProps<T>) {
	const { elRef, isShow, setIsShow } = useOutsiteClick(false)
	const [isSelected, setIsSelected] = useState<any>(null)

	return (
		<div className={cn(style.select, className)} ref={elRef}>
			<div
				className={style.select_placeholder}
				onClick={() => {
					isLoading ? undefined : setIsShow(!isShow)
				}}
			>
				<h5 className={style.title}>
					{isLoading ? (
						<LoaderComponent color="black" />
					) : isSelected ? (
						<>
							<span>{TitleIcon ? <TitleIcon /> : null}</span>
							{isSelected}
						</>
					) : (
						<>
							<span>{TitleIcon ? <TitleIcon /> : null}</span>
							{title}
						</>
					)}
				</h5>
				<LuSettings2 />
			</div>

			{isShow && (
				<div className={style.select_list}>
					{data &&
						data.map((option, i) => (
							<div
								className={cn(style.select_item, {
									[style.disabled]: option.isDisable,
								})}
								key={i}
								onClick={() => {
									setIsShow(!isShow)
									setIsSelected(option.label)
									onChange(option)
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
