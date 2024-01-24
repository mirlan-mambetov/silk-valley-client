"use client"

import { useWindowWidth } from "@/hooks/app/useWindowWidth"
import useOutsiteClick from "@/hooks/useOutsideClick"
import cn from "classnames"
import { usePathname } from "next/navigation"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

import { ButtonComponent, MenuComponent } from ".."
import { HEADER_MENU } from "../menu/menu.data"

import Image from "next/image"
import style from "./sidebar.module.scss"

interface ISidebarComponentProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isOpen?: boolean
}
export const SidebarComponent: FC<ISidebarComponentProps> = ({
	isOpen,
	...props
}) => {
	const pathName = usePathname()
	// let result = pathName.replace(/^.*?\/(\w+)$/, "$1")
	const { width } = useWindowWidth()
	const { elRef, isShow, setIsShow } = useOutsiteClick(false)

	const data = HEADER_MENU.find(
		(item) => item.alias === pathName.replace("/", "")
	)
	return (
		<>
			{width < 940 ? (
				<ButtonComponent
					className={style.button}
					onClick={() => setIsShow(!isShow)}
				>
					<Image
						src={`/icons/Category.svg`}
						alt="categories"
						width={17}
						height={17}
					/>
					<small>Каталог</small>
				</ButtonComponent>
			) : null}
			<div
				className={cn(style.sidebar, { [style.isOpen]: isShow })}
				{...props}
				ref={elRef}
			>
				<div className={style.wrap}>
					<div className={style.top}>
						{/* <div className={style.title}>Каталог</div> */}
						<ButtonComponent onClick={() => setIsShow(!isShow)} type="closed" />
					</div>
					<div className={style.content}>
						{/* MENU CATEGORIES */}
						{data?.childsData && (
							<MenuComponent
								className={style.menu}
								data={data?.childsData}
								orientation="row-heigth"
								size="1xl"
							/>
						)}
					</div>
					{/* SORT COLORS AND SIZES */}
					{/* <ProducAttributeComponent
					data={["32xl", "34xl", "38xl", "48XXL"]}
					title="Размеры"
					orientation="column"
					className={style.attributes}
					size="1xl"
				/>
				<ProducAttributeComponent
					data={["Черный", "Черно/Белый", "Красный", "Белый"]}
					title="Цвета"
					orientation="column"
					className={style.attributes}
					size="1xl"
				/>
				<PriceRangeComponent /> */}
				</div>
			</div>
		</>
	)
}
