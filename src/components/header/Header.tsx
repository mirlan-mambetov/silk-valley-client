"use client"

import {
	AuthComponent,
	ButtonComponent,
	HeaderTopComponent,
	LogoComponent,
	MobileHeaderComponent,
	NotifyPlaceholder,
	UserComponent,
} from "@/components"
import { headerOverlayVariantMotion } from "@/framer-motion/sticky.header"
import { useWindowWidth } from "@/hooks/app/useWindowWidth"
import { useAuth } from "@/hooks/auth/useAuth"
import { useCart } from "@/hooks/cart/useCart"
import { useScreen } from "@/hooks/screen/useScreen"
import { useSideBar } from "@/hooks/useSidebar/useSidebar"
import { useUser } from "@/hooks/user/useUser"
import cn from "classnames"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { IoSearchOutline } from "react-icons/io5"
import { SlHandbag } from "react-icons/sl"
import style from "./header.module.scss"

export const HeaderComponent = () => {
	const { push } = useRouter()
	const { width } = useWindowWidth()
	const { screenHandle } = useScreen()
	const { products } = useCart()
	const { isAuthentificated } = useAuth()
	const { user } = useUser()
	const { sidebarHandler, isOpen } = useSideBar()

	return (
		<>
			{width > 530 ? (
				<>
					<div className={style.header}>
						<HeaderTopComponent />
						<div className="container">
							<div className={style.content}>
								<div className={style.row}>
									<div
										className={cn(style.menu, { [style.active]: isOpen })}
										onClick={sidebarHandler}
									>
										<ButtonComponent
											title="Меню Silk Valley"
											aria-label="Меню"
											className={style.button}
										>
											<span></span>
											<span></span>
											<span></span>
										</ButtonComponent>
									</div>
									<div className={style.column}>
										<ButtonComponent
											title="Поиск на Silk Valley"
											className={style.search}
											aria-label="Поиск"
										>
											<IoSearchOutline />
										</ButtonComponent>
									</div>
								</div>
								<div className={style.row}>
									<LogoComponent width={140} height={90} title="Silk Valley" />
								</div>
								<div className={style.row}>
									<div className={style.column}>
										{isAuthentificated && user ? (
											<UserComponent user={user} />
										) : (
											<ButtonComponent
												title="Вход в систему"
												aria-label="Вход"
												onClick={() =>
													screenHandle({ content: <AuthComponent /> })
												}
											>
												Вход
											</ButtonComponent>
										)}
									</div>
									<div className={style.column}>
										<NotifyPlaceholder length={products?.length} />
										<ButtonComponent
											title="Корзина"
											aria-label="Корзина"
											className={style.cart}
											onClick={() => push("/cart")}
										>
											<SlHandbag />
										</ButtonComponent>
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
