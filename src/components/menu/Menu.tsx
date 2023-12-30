"use client"

import cn from "classnames"
import Link from "next/link"
import { useState } from "react"
import { HEADER_MENU, HEADER_MENU_SECOND } from "./menu.data"
import style from "./menu.module.scss"

interface IMenuComponent {}
export const MenuComponent = () => {
	const [itemId, setItemId] = useState<null | number>(null)

	return (
		<div className={style.menu}>
			<ul className={style.list}>
				{HEADER_MENU.map((link) => (
					<li
						className={style.list__item}
						key={link.id}
						onMouseEnter={() => setItemId(link.id)}
					>
						<Link href={`/${link.href}`}>{link.name}</Link>
						<ul
							className={cn(style.submenu, {
								[style.active]: itemId === link.id,
							})}
							onMouseLeave={() => setItemId(null)}
						>
							{HEADER_MENU_SECOND.map((secondLink) => {
								if (secondLink.itemId === link.id) {
									return (
										<li className={style.submenu__item} key={secondLink.id}>
											<Link href={`/${secondLink.href}`}>
												{secondLink.name}
											</Link>
										</li>
									)
								}
								return null
							})}
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}
