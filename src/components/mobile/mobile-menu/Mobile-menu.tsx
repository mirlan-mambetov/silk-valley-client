"use client"

import { useFetchAllCategories } from "@/hooks/categories/useFetchAllCategories"
import Link from "next/link"
import { FC } from "react"
import style from "./mobile-menu.module.scss"

export const MobileMenuComponent: FC = () => {
	const { data, isFetching } = useFetchAllCategories()

	return (
		<div className={style.menu}>
			<ul>
				{data?.map((link) => (
					<li key={link.id}>
						<Link href={`/catalog/explorer/${link.slug}`}>{link.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
