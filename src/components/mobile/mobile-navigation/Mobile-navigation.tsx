"use client"

import {
	Auth,
	Button,
	CartIcon,
	CatalogIcon,
	HomeIcon,
	MobileMenuComponent,
	NotifyPlaceholder,
	UserComponent,
} from "@/components"
import { useWindowWidth } from "@/hooks/app/useWindowWidth"
import { useCart } from "@/hooks/cart/useCart"
import { useScreen } from "@/hooks/screen/useScreen"
import { useUser } from "@/hooks/user/useUser"
import { useRouter } from "next/navigation"
import { FC } from "react"
import style from "./mobile-navigation.module.scss"

export const MobileNavigation: FC = () => {
	const { width } = useWindowWidth()
	const { push } = useRouter()
	const { screenHandle } = useScreen()
	const { state, showCart } = useCart()
	const { user } = useUser()

	return width <= 530 ? (
		<div className={style.menu}>
			<div className="container">
				<div className={style.list}>
					<div className={style.item}>
						<Button onClick={() => push("/")}>
							<HomeIcon />
							{/* <span>Профиль</span> */}
						</Button>
					</div>
					<div className={style.item}>
						<Button
							onClick={() => screenHandle({ content: <MobileMenuComponent /> })}
						>
							<CatalogIcon />
							{/* <span>Категории</span> */}
						</Button>
					</div>

					<div className={style.item}>
						<Button onClick={() => showCart()}>
							<CartIcon />
							<NotifyPlaceholder length={state.products.length} toUp="1" />
						</Button>
					</div>

					<div className={style.item}>
						{user ? (
							<UserComponent user={user} onClick={() => push("/user")} />
						) : (
							<Button onClick={() => screenHandle({ content: <Auth /> })}>
								<svg
									width="30"
									height="30"
									viewBox="0 0 25 25"
									role="img"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle
										cx="12"
										cy="6"
										r="4"
										stroke="#1C274C"
										strokeWidth="1.5"
									/>
									<path
										d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
										stroke="#1C274C"
										strokeWidth="1.5"
									/>
								</svg>
								{/* <span>Профиль</span> */}
							</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	) : null
}
