"use client"

import Image from "next/image"
import Link from "next/link"
import { FaMapMarkerAlt } from "react-icons/fa"
import { IoSearchOutline } from "react-icons/io5"
import { SlHandbag } from "react-icons/sl"
import { ButtonComponent, MenuComponent } from "../"
import style from "./header.module.scss"

export const HeaderComponent = () => {
	return (
		<div className={style.header}>
			{/* TOP HEADER */}
			<div className={style.top}>
				<div className="container">
					<div className={style.wrap}>
						<div className={style.row}>
							<div className={style.deliver}>
								<FaMapMarkerAlt />
								<ButtonComponent>
									<span>Доставка: Иссык - Кульская область. г. Каракол</span>
								</ButtonComponent>
							</div>
						</div>
						<div className={style.row}>
							<ButtonComponent>
								<FaMapMarkerAlt />
							</ButtonComponent>
						</div>
					</div>
				</div>
			</div>
			{/* END TOP HEADER */}
			<div className="container">
				<div className={style.content}>
					{/* MENU */}
					<div className={style.menu}>
						<ButtonComponent className={style.button}>
							<span></span>
							<span></span>
							<span></span>
						</ButtonComponent>
						<MenuComponent />
					</div>
					{/* END MENU */}

					{/* LOGO */}
					<div className={style.logo}>
						<Link href={`/`}>
							<Image
								priority
								src="/icons/Silk Valley.svg"
								width={300}
								height={300}
								alt="logo"
							/>
						</Link>
					</div>
					{/* END LOGO */}

					{/* ACTIONS */}
					<div className={style.action}>
						<div className={style.column}>
							<ButtonComponent>Вход</ButtonComponent>
						</div>
						<div className={style.column}>
							<ButtonComponent className={style.search}>
								<IoSearchOutline />
							</ButtonComponent>
						</div>
						<div className={style.column}>
							<ButtonComponent className={style.cart}>
								<SlHandbag />
							</ButtonComponent>
						</div>
					</div>
					{/* END ACTIONS */}
				</div>
			</div>
		</div>
	)
}
