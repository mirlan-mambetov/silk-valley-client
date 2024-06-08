"use client"

import { useState } from "react"
import { Login } from "./Login"
import { Register } from "./Register"

export const Auth = () => {
	const [choice, setChoice] = useState<"login" | "register">("login")
	return (
		<div className="container">
			<Login
				setChoice={(value) => setChoice(value)}
				animate={choice === "login"}
			/>
			<Register
				setChoice={(value) => setChoice(value)}
				animate={choice === "register"}
			/>
		</div>
	)
}
