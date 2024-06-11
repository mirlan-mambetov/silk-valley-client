"use client"

import {
	Auth,
	Bar,
	Button,
	Logo,
	MobileHeaderComponent,
	NotifyPlaceholder,
	UserComponent,
} from "@/components"
import { headerOverlayVariantMotion } from "@/framer-motion/sticky.header"
import { useWindowWidth } from "@/hooks/app/useWindowWidth"
import { useAuth } from "@/hooks/auth/useAuth"
import { useCart } from "@/hooks/cart/useCart"
import { useScreen } from "@/hooks/screen/useScreen"
import { useUser } from "@/hooks/user/useUser"
import { useSideBar } from "@/hooks/useSidebar/useSidebar"
import cn from "classnames"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { IoSearchOutline } from "react-icons/io5"
import { SlHandbag } from "react-icons/sl"
import style from "./header.module.scss"

export const Header = () => {
	const { push } = useRouter()
	const { width } = useWindowWidth()
	const { screenHandle } = useScreen()
	const { state, showCart } = useCart()
	const { isAuthentificated } = useAuth()
	const { user } = useUser()
	const { sidebarHandler, isOpen } = useSideBar()

	return (
		<>
			{width > 530 ? (
				<>
					<div className={style.header}>
						<Bar />
						<div className="container">
							<div className={style.content}>
								<div className={style.row}>
									<div
										className={cn(style.menu, { [style.active]: isOpen })}
										onClick={sidebarHandler}
									>
										<Button
											title="Меню Silk Valley"
											aria-label="Меню"
											className={style.button}
										>
											<span></span>
											<span></span>
											<span></span>
										</Button>
									</div>
									<div className={style.column}>
										<Button
											title="Поиск на Silk Valley"
											className={style.search}
											aria-label="Поиск"
										>
											<IoSearchOutline />
										</Button>
									</div>
								</div>
								<div className={style.row}>
									<Logo width={140} height={90} title="Silk Valley" />
								</div>
								<div className={style.row}>
									<div className={style.column}>
										{isAuthentificated && user ? (
											<UserComponent user={user} />
										) : (
											<Button
												title="Вход в систему"
												aria-label="Вход"
												onClick={() => screenHandle({ content: <Auth /> })}
											>
												Вход
											</Button>
										)}
									</div>
									<div className={style.column}>
										<NotifyPlaceholder
											length={state.products.length}
											toUp="2"
										/>
										<Button
											title="Корзина"
											aria-label="Корзина"
											className={style.cart}
											onClick={() => showCart()}
										>
											<SlHandbag />
										</Button>
									</div>
								</div>
							</div>
						</div>
						<motion.div
							animate={isOpen ? "open" : "closed"}
							variants={headerOverlayVariantMotion}
							className={style.overlay}
						></motion.div>
					</div>
				</>
			) : (
				<MobileHeaderComponent />
			)}
		</>
	)
}
