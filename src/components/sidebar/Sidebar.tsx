"use client"

import {
	sidebarOverlayVariantMotion,
	sidebarVariantMotion,
} from "@/framer-motion/sidebar/sidebar"
import { useFetchAllCategories } from "@/hooks/categories/useFetchAllCategories"
import { useSideBar } from "@/hooks/useSidebar/useSidebar"
import { motion } from "framer-motion"
import Link from "next/link"
import { FC } from "react"
import style from "./sidebar.module.scss"

interface ISidebarComponentProps {
	isOpen?: boolean
}
export const SidebarComponent: FC<ISidebarComponentProps> = ({ ...props }) => {
	const { isOpen } = useSideBar()

	const data = useFetchAllCategories()

	return (
		<>
			<motion.aside
				variants={sidebarVariantMotion}
				animate={isOpen ? "open" : "closed"}
				className={style.sidebar}
				{...props}
			>
				<div className={style.wrap}>
					<ul className={style.list}>
						{data &&
							data.map((category) => (
								<li className={style.listItem} key={category.id}>
									<Link href={`/catalog/explorer/${category.slug}`}>
										{category.name}
									</Link>
								</li>
							))}
					</ul>
					<span>Silk Valley &copy; 2024</span>
				</div>
			</motion.aside>
			<motion.div
				variants={sidebarOverlayVariantMotion}
				animate={isOpen ? "open" : "closed"}
				className={style.overlay}
			></motion.div>
		</>
	)
}
