"use client"

import { FC } from "react"
import { IoLogInOutline } from "react-icons/io5"
import { ButtonComponent, LoginComponent } from ".."
import style from "./auth.module.scss"

export const AuthComponent: FC = () => {
	return (
		<div className="container">
			<div className={style.auth}>
				<div className={style.wrap}>
					<div className={style.top}>
						<span>Нет аккаунта ? зарегистрируйтесь</span>
						<ButtonComponent>
							Регистрация
							<span>
								<IoLogInOutline />
							</span>
						</ButtonComponent>
					</div>
					<LoginComponent />
				</div>
			</div>
		</div>
	)
}
