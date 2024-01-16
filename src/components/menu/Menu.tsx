"use client"

import { variants, variants2 } from "@/framer-motion"
import { IMenuData } from "@/interfaces/menu.interface"
import cn from "classnames"
import { motion } from "framer-motion"
import Link from "next/link"
import { DetailsHTMLAttributes, FC } from "react"
import style from "./menu.module.scss"

interface IMenuComponentProps extends DetailsHTMLAttributes<HTMLDivElement> {
	orientation?: "row" | "column" | "row-heigth"
	secondMenu?: boolean
	type?: "default" | "absolute"
	data: IMenuData[]
	limit?: number
	size?: "1xl" | "2xl"
	animate?: boolean
}
export const MenuComponent: FC<IMenuComponentProps> = ({
	orientation = "column",
	secondMenu = true,
	className,
	type = "default",
	data,
	size = "2xl",
	limit,
	animate,
}) => {
	const limitedData = limit ? data.slice(0, limit) : data
	return (
		<motion.div
			className={cn(style.menu, className, {
				[style.absolute]: type === "absolute",
				// [style.active]: isShow,
			})}
		>
			<motion.ul
				initial={false}
				variants={variants2}
				animate={!animate ? false : animate ? "open" : "closed"}
				className={cn(style.list, {
					[style.row]: orientation === "row",
					[style.row_heigth]: orientation === "row-heigth",
					[style.column]: orientation === "column",
					[style.xl1]: size === "1xl",
				})}
			>
				{limitedData.map((link) => (
					<motion.li
						variants={variants}
						className={style.list__item}
						key={link.id}
						// onMouseEnter={() => setItemId(link.id)}
					>
						<Link href={`/${link.alias}`}>{link.name}</Link>
						{link.childsData && secondMenu ? (
							<motion.ul
								// initial={false}
								// animate={itemId === link.id ? "open" : "closed"}
								// variants={variants5}
								className={style.submenu}
								// onMouseLeave={() => setItemId(null)}
							>
								{link.childsData.map((secondLink) => {
									if (secondLink.itemId === link.id) {
										return (
											<motion.li
												variants={variants}
												className={style.submenu__item}
												key={secondLink.id}
											>
												<Link href={`/${secondLink.alias}`}>
													{secondLink.name}
												</Link>
											</motion.li>
										)
									}
									return null
								})}
							</motion.ul>
						) : null}
					</motion.li>
				))}
			</motion.ul>
		</motion.div>
	)
}
