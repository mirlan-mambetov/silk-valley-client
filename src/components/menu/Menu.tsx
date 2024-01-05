"use client"

import { variants, variants2 } from "@/framer-motion"
import { IMenuData } from "@/interfaces/menu.interface"
import cn from "classnames"
import { motion } from "framer-motion"
import Link from "next/link"
import { FC } from "react"
import style from "./menu.module.scss"

interface IMenuComponentProps {
	orientation?: "row" | "column"
	secondMenu?: boolean
	type?: "default" | "absolute"
	data: IMenuData[]
	limit?: number
	animate?: boolean
}
export const MenuComponent: FC<IMenuComponentProps> = ({
	orientation = "column",
	secondMenu = true,
	type = "default",
	data,
	limit,
	animate,
}) => {
	const limitedData = limit ? data.slice(0, limit) : data
	return (
		<motion.div
			className={cn(style.menu, {
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
					[style.column]: orientation === "column",
				})}
			>
				{limitedData.map((link) => (
					<motion.li
						variants={variants}
						className={style.list__item}
						key={link.id}
						// onMouseEnter={() => setItemId(link.id)}
					>
						<Link href={`/${link.href}`}>{link.name}</Link>
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
												<Link href={`/${secondLink.href}`}>
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
