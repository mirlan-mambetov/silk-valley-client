"use client"

import { FC, useState } from "react"
import { LoginComponent, RegisterComponent } from ".."
import style from "./auth.module.scss"

export const AuthComponent: FC = () => {
	const [choice, setChoice] = useState<"login" | "register">("login")
	return (
		<div className="container">
			<div className={style.auth}>
				<LoginComponent
					setChoice={(value) => setChoice(value)}
					animate={choice === "login"}
				/>
				<RegisterComponent
					setChoice={(value) => setChoice(value)}
					animate={choice === "register"}
				/>
			</div>
		</div>
	)
}
