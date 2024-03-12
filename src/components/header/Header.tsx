"use client"

import {
	AuthComponent,
	ButtonComponent,
	DeliverComponent,
	LogoComponent,
	MenuComponent,
	MobileHeaderComponent,
	NotifyPlaceholder,
} from "@/components"
import { variants3, variants4 } from "@/framer-motion"
import { useWindowWidth } from "@/hooks/app/useWindowWidth"
import { useCart } from "@/hooks/cart/useCart"
import { useScreen } from "@/hooks/screen/useScreen"
import useOutsiteClick from "@/hooks/useOutsideClick"
import cn from "classnames"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { FaMapMarkerAlt } from "react-icons/fa"
import { IoSearchOutline } from "react-icons/io5"
import { SlHandbag } from "react-icons/sl"
import { HEADER_MENU } from "../menu/menu.data"
import style from "./header.module.scss"

export const HeaderComponent = () => {
	const { elRef, isShow, setIsShow } = useOutsiteClick(false)
	const { push } = useRouter()
	const { width } = useWindowWidth()
	const { setContentHandler } = useScreen()
	const { products } = useCart()

	return (
		<>
			{/* MOBILE */}
			{width > 530 ? (
				<>
					<div className={style.header}>
						{/* TOP HEADER */}
						<div className={style.top}>
							<div className="container">
								<div className={style.wrap}>
									<div className={style.row}>
										<div className={style.deliver}>
											<FaMapMarkerAlt />
											<ButtonComponent
												aria-label="Доставка"
												onClick={() => setContentHandler(<DeliverComponent />)}
											>
												<span>г. Каракол</span>
											</ButtonComponent>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* END TOP HEADER */}
						<div className="container">
							<div className={style.content}>
								{/* MENU */}
								<div className={cn(style.menu, { [style.active]: isShow })}>
									<ButtonComponent
										aria-label="Меню"
										className={style.button}
										onClick={() => setIsShow(!isShow)}
									>
										<span></span>
										<span></span>
										<span></span>
									</ButtonComponent>
									<MenuComponent
										className={style.list}
										orientation="column"
										data={HEADER_MENU}
										limit={3}
										animate={false}
									/>
								</div>
								{/* END MENU */}

								{/* LOGO */}
								<LogoComponent />
								{/* END LOGO */}

								{/* ACTIONS */}
								<div className={style.action}>
									<div className={style.column}>
										<ButtonComponent
											aria-label="Вход"
											onClick={() => setContentHandler(<AuthComponent />)}
										>
											Вход
										</ButtonComponent>
									</div>
									<div className={style.column}>
										<ButtonComponent
											className={style.search}
											aria-label="Поиск"
										>
											<IoSearchOutline />
										</ButtonComponent>
									</div>
									<div className={style.column}>
										<NotifyPlaceholder length={products?.length} />
										<ButtonComponent
											aria-label="Корзина"
											className={style.cart}
											onClick={() => push("/cart")}
										>
											<SlHandbag />
										</ButtonComponent>
									</div>
								</div>
								{/* END ACTIONS */}
							</div>
						</div>
					</div>
					<motion.div
						variants={variants3}
						animate={isShow ? "open" : "closed"}
						className={style.navigation}
						ref={elRef}
					>
						<motion.div
							animate={isShow ? "active" : "closed"}
							variants={variants4}
							className={style.border}
						></motion.div>
						<div className="container">
							<MenuComponent
								orientation="row"
								secondMenu={false}
								data={HEADER_MENU}
							/>
						</div>
					</motion.div>
					<div
						className={cn(style.overlay, { [style.transform]: isShow })}
					></div>
				</>
			) : (
				<MobileHeaderComponent />
			)}
		</>
	)
}
