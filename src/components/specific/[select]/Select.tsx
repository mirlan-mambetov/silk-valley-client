"use client"

import { Loader } from "@/components"
import useOutsiteClick from "@/hooks/useOutsideClick"
import cn from "classnames"
import { useState } from "react"
import { LuSettings2 } from "react-icons/lu"
import style from "./select.module.scss"
import { ISelectProps } from "./Select.props"

function Select<T>({
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
						<Loader color="black" />
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

export default Select
