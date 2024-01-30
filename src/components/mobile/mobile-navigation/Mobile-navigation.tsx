"use client"

import {
	AuthComponent,
	ButtonComponent,
	MenuCategoriesComponent,
} from "@/components"
import { useScreen } from "@/hooks/screen/useScreen"
import cn from "classnames"
import { useRouter } from "next/navigation"
import { FC } from "react"
import style from "./mobile-navigation.module.scss"

export const MobileMenuComponent: FC = () => {
	const { push } = useRouter()
	const { setContentHandler, isOpen, clearContentHandler } = useScreen()

	return (
		<div
			className={cn(style.menu, {
				[style.shadow]: isOpen,
			})}
		>
			<div className="container">
				<div className={style.list}>
					<div className={style.item}>
						<ButtonComponent onClick={() => push("/")}>
							<svg
								aria-label="Главная"
								fill="none"
								height="25"
								role="img"
								viewBox="0 0 24 24"
								width="25"
							>
								<path
									d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"
									color="#1C274C"
									strokeWidth="1.8"
									stroke="#1C274C"
								></path>
							</svg>
							{/* <span>Профиль</span> */}
						</ButtonComponent>
					</div>
					<div className={style.item}>
						<ButtonComponent
							onClick={() =>
								isOpen
									? clearContentHandler()
									: setContentHandler(<MenuCategoriesComponent />)
							}
						>
							<svg
								width="26"
								role="img"
								height="26"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z"
									stroke="#1C274C"
									strokeWidth="1.7"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
									stroke="#1C274C"
									strokeWidth="1.7"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"
									stroke="#1C274C"
									strokeWidth="1.7"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
									stroke="#1C274C"
									strokeWidth="1.7"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							{/* <span>Категории</span> */}
						</ButtonComponent>
					</div>

					<div className={style.item}>
						<ButtonComponent onClick={() => push("/cart")}>
							<svg
								width="30"
								height="30"
								viewBox="0 0 24 24"
								role="img"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M16.0001 9C16.0001 9.55229 15.5523 10 15.0001 10C14.4478 10 14.0001 9.55229 14.0001 9C14.0001 8.44772 14.4478 8 15.0001 8C15.5523 8 16.0001 8.44772 16.0001 9Z"
									fill="#1C274C"
								/>
								<path
									d="M10.0001 9C10.0001 9.55229 9.55235 10 9.00006 10C8.44778 10 8.00006 9.55229 8.00006 9C8.00006 8.44772 8.44778 8 9.00006 8C9.55235 8 10.0001 8.44772 10.0001 9Z"
									fill="#1C274C"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12.0001 2.75C10.7574 2.75 9.75006 3.75736 9.75006 5V5.25447C10.1676 5.24999 10.6183 5.25 11.1053 5.25H12.8948C13.3819 5.25 13.8326 5.24999 14.2501 5.25447V5C14.2501 3.75736 13.2427 2.75 12.0001 2.75ZM15.7501 5.30694V5C15.7501 2.92893 14.0711 1.25 12.0001 1.25C9.929 1.25 8.25006 2.92893 8.25006 5V5.30694C8.11506 5.31679 7.98479 5.32834 7.85904 5.34189C6.98068 5.43657 6.24614 5.63489 5.59385 6.08197C5.3695 6.23574 5.15877 6.40849 4.96399 6.59833C4.39766 7.15027 4.05914 7.83166 3.79405 8.67439C3.53667 9.49258 3.32867 10.5327 3.06729 11.8396L3.04822 11.935C2.67158 13.8181 2.37478 15.302 2.28954 16.484C2.20244 17.6916 2.32415 18.7075 2.89619 19.588C3.08705 19.8817 3.30982 20.1534 3.56044 20.3982C4.31157 21.1318 5.28392 21.4504 6.48518 21.6018C7.66087 21.75 9.17418 21.75 11.0946 21.75H12.9055C14.826 21.75 16.3393 21.75 17.5149 21.6018C18.7162 21.4504 19.6886 21.1318 20.4397 20.3982C20.6903 20.1534 20.9131 19.8817 21.1039 19.588C21.676 18.7075 21.7977 17.6916 21.7106 16.484C21.6254 15.3021 21.3286 13.8182 20.9519 11.9351L20.9328 11.8396C20.6715 10.5327 20.4635 9.49259 20.2061 8.67439C19.941 7.83166 19.6025 7.15027 19.0361 6.59833C18.8414 6.40849 18.6306 6.23574 18.4063 6.08197C17.754 5.63489 17.0194 5.43657 16.1411 5.34189C16.0153 5.32834 15.8851 5.31679 15.7501 5.30694ZM8.01978 6.83326C7.27307 6.91374 6.81176 7.06572 6.44188 7.31924C6.28838 7.42445 6.1442 7.54265 6.01093 7.67254C5.68979 7.98552 5.45028 8.40807 5.22492 9.12449C4.99463 9.85661 4.80147 10.8172 4.52967 12.1762C4.14013 14.1239 3.8633 15.5153 3.78565 16.5919C3.70906 17.6538 3.83838 18.2849 4.15401 18.7707C4.2846 18.9717 4.43702 19.1576 4.60849 19.3251C5.02293 19.7298 5.61646 19.9804 6.67278 20.1136C7.74368 20.2486 9.1623 20.25 11.1486 20.25H12.8515C14.8378 20.25 16.2564 20.2486 17.3273 20.1136C18.3837 19.9804 18.9772 19.7298 19.3916 19.3251C19.5631 19.1576 19.7155 18.9717 19.8461 18.7707C20.1617 18.2849 20.2911 17.6538 20.2145 16.5919C20.1368 15.5153 19.86 14.1239 19.4705 12.1762C19.1987 10.8173 19.0055 9.85661 18.7752 9.12449C18.5498 8.40807 18.3103 7.98552 17.9892 7.67254C17.8559 7.54265 17.7118 7.42445 17.5582 7.31924C17.1884 7.06572 16.7271 6.91374 15.9803 6.83326C15.2173 6.75101 14.2374 6.75 12.8515 6.75H11.1486C9.76271 6.75 8.78285 6.75101 8.01978 6.83326Z"
									fill="#1C274C"
								/>
							</svg>
							{/* <span>Корзина</span> */}
						</ButtonComponent>
					</div>

					<div className={style.item}>
						<ButtonComponent
							onClick={() => setContentHandler(<AuthComponent />)}
						>
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
						</ButtonComponent>
					</div>
				</div>
			</div>
		</div>
	)
}
