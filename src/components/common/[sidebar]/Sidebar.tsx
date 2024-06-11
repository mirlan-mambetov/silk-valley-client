"use client"

import { Loader } from "@/components"
import {
	sidebarOverlayVariantMotion,
	sidebarVariantMotion,
} from "@/framer-motion/sidebar/sidebar"
import { useFetchAllCategories } from "@/hooks/categories/useFetchAllCategories"
import { useSideBar } from "@/hooks/useSidebar/useSidebar"
import cn from "classnames"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import style from "./sidebar.module.scss"

const Sidebar = () => {
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
				initial={false}
				variants={sidebarVariantMotion}
				animate={isOpen ? "open" : "closed"}
				className={style.sidebar}
			>
				{isFetching ? (
					<Loader color="black" position="absolute" />
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
												[style.isOpen]:
													categoryId === category.id &&
													category.categories.length,
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
				initial={false}
				variants={sidebarOverlayVariantMotion}
				animate={isOpen ? "open" : "closed"}
				className={style.overlay}
			></motion.div>
		</>
	)
}
export default Sidebar
