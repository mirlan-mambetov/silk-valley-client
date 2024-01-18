"use client"

import { FC } from "react"
import { MenuComponent } from ".."
import { FOOTER_LINKS } from "./footer.data"
import style from "./footer.module.scss"

export const FooterComponent: FC = () => {
	return (
		<section className={style.footer}>
			<div className="container">
				<div className={style.wrap}>
					<div className={style.column}>
						<MenuComponent data={FOOTER_LINKS} orientation="row" />
					</div>
					<div className={style.column}>
						<span>Silk Valley @2024</span>
						<span>Все права защищены</span>
					</div>
				</div>
			</div>
		</section>
	)
}
