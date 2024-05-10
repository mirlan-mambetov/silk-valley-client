"use client"

import {
	sidebarOverlayVariantMotion,
	sidebarVariantMotion,
} from "@/framer-motion/sidebar/sidebar"
import { useFetchAllCategories } from "@/hooks/categories/useFetchAllCategories"
import { useSideBar } from "@/hooks/useSidebar/useSidebar"
import cn from "classnames"
import { motion } from "framer-motion"
import Link from "next/link"
import { FC, memo, useEffect, useState } from "react"
import { LoaderComponent } from ".."
import style from "./sidebar.module.scss"

interface ISidebarComponentProps {
	isOpen?: boolean
}
const SidebarComponent: FC<ISidebarComponentProps> = ({ ...props }) => {
	const [categoryId, setCategoryId] = useState<number | null>(null)
	const [childCategoryId, setChildCategoryId] = useState<number | null>(null)
	const { isOpen } = useSideBar()

	const { data, isFetching } = useFetchAllCategories()

	const handler = (categoryId: number) => {
		setCategoryId(categoryId)
	}

	useEffect(() => {
		if (!isOpen) {
			setCategoryId(null)
		}
	}, [isOpen])
	return (
		<>
			<motion.aside
				variants={sidebarVariantMotion}
				animate={isOpen ? "open" : "closed"}
				className={style.sidebar}
				{...props}
			>
				{isFetching ? (
					<LoaderComponent color="black" position="absolute" />
				) : (
					<div className={style.wrap}>
						<ul className={style.list}>
							{data &&
								data.map((category) => (
									<li
										className={style.listItem}
										key={category.id}
										onMouseEnter={() => handler(category.id)}
									>
										<Link href={`/catalog/explorer/${category.slug}`}>
											{category.name}
										</Link>
										<ul
											onMouseLeave={() => {
												setCategoryId(null)
											}}
											className={cn(style.submenu, {
												[style.isOpen]: categoryId === category.id,
											})}
										>
											{category.categories.map((secondCategory) => (
												<li
													className={style.submenuItem}
													key={secondCategory.id}
													onMouseEnter={() =>
														setChildCategoryId(secondCategory.id)
													}
												>
													<Link href={`/catalog/${secondCategory.slug}`}>
														{secondCategory.name}
													</Link>
													{secondCategory.childsCategories.length ? (
														<ul
															onMouseLeave={() => {
																setChildCategoryId(null)
															}}
															className={cn(style.submenu, {
																[style.isOpen]:
																	childCategoryId === secondCategory.id,
															})}
														>
															{secondCategory.childsCategories.map(
																(childCategory) => (
																	<li
																		className={style.submenuItem}
																		key={childCategory.id}
																	>
																		<Link
																			href={`/catalog/category/${childCategory.slug}`}
																		>
																			{childCategory.name}
																		</Link>
																	</li>
																)
															)}
														</ul>
													) : null}
												</li>
											))}
										</ul>
									</li>
								))}
						</ul>
						<span>Silk Valley &copy; 2024</span>
					</div>
				)}
			</motion.aside>
			<motion.div
				variants={sidebarOverlayVariantMotion}
				animate={isOpen ? "open" : "closed"}
				className={style.overlay}
			></motion.div>
		</>
	)
}

export default memo(SidebarComponent)
