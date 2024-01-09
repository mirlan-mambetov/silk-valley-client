"use client"

import { IRoutesHistoryItem } from "@/interfaces/routes.history.interface"
import cn from "classnames"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC, useState } from "react"
import { IoMdArrowDropright } from "react-icons/io"
import style from "./routes-history.module.scss"

export interface IRoutesHistoryProps {
	links?: IRoutesHistoryItem[]
	productName?: string
}

export const RoutesHistoryComponent: FC<IRoutesHistoryProps> = ({
	links,
	productName,
}) => {
	const [active, setActive] = useState(false)
	const pathName = usePathname()
	const replcaseString = pathName.replace(/^\/[^\/]+\//, "")

	return (
		<div className={style.history}>
			<div className={style.list}>
				<div className={style.listItem}>
					<Link href={`/`}>
						Главная
						<IoMdArrowDropright />
					</Link>
				</div>

				{links
					? links.map((link, i) => (
							<div
								className={cn(style.listItem, {
									[style.active]: link.href === pathName,
								})}
								key={i}
							>
								<Link href={`${link.href}`}>
									{link.name}
									<IoMdArrowDropright />
								</Link>
							</div>
					  ))
					: null}
				<span>{productName}</span>
			</div>
		</div>
	)
}
