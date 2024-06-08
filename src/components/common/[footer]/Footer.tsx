"use client"

import Link from "next/link"
import { FC } from "react"
import { AiFillInstagram } from "react-icons/ai"
import { FaTelegramPlane } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"

import { Logo } from "@/components"
import style from "./footer.module.scss"

export const Footer: FC = () => {
	const currentDate = new Date().getFullYear()

	return (
		<div className={style.footer}>
			<div className="container">
				<div className={style.columns}>
					<div className={style.column}>
						<h5 className={style.title}>
							<Logo width={100} color="purple" />
						</h5>
						<div className={style.items}>
							<span className={style.item}>Silk Valley @{currentDate}</span>
							<span className={style.item}>Все права защищены</span>
						</div>
						<div className={style.socials}>
							<div className={style.social}>
								<AiFillInstagram />
							</div>
							<div className={style.social}>
								<IoLogoWhatsapp />
							</div>
							<div className={style.social}>
								<FaTelegramPlane />
							</div>
						</div>
					</div>
					<div className={style.column}>
						<h5 className={style.title}>Контакты</h5>
						<div className={style.items}>
							<Link href={"/"} className={style.item}>
								hello@slkvalley.com
							</Link>
							<Link href={"/"} className={style.item}>
								+9409324932049213
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={style.bottom}>
				<div className="container">
					<div className={style.list}>
						<Link href={"/"} className={style.item}>
							Политика конфеденциальности
						</Link>
						<Link href={"/"} className={style.item}>
							Куки и обработка личных данных
						</Link>
						<Link href={"/"} className={style.item}>
							Правила пользования платформой
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
