"use client"

import { AuthApi } from "@/api/api-auth/auth-api"
import { IAuthRegisterDTO } from "@/api/api-auth/data-transfer"
import { IUserRegisterDTO } from "@/api/api-user/data.transfer"
import { Button, FieldComponent } from "@/components"
import { animateLoginRegister } from "@/framer-motion/auth/auth.animate"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { useMutation } from "@tanstack/react-query"
import { motion } from "framer-motion"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { IoLogInOutline } from "react-icons/io5"
import style from "./auth.module.scss"
import { IAuthProps } from "./Auth.props"

export const Register: FC<IAuthProps> = ({ animate, setChoice }) => {
	const { registerPending, registerRejected, registerSuccess } =
		useStoreActions()
	const { mutateAsync, isPending } = useMutation({
		mutationKey: ["registerUser"],
		mutationFn: (data: IAuthRegisterDTO) => AuthApi.registerUser(data),
	})
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<IUserRegisterDTO>({ mode: "onChange" })

	const registerHandler = async (data: IUserRegisterDTO) => {
		registerPending()
		try {
			await mutateAsync(data, {
				onSuccess(data, variables, context) {
					setChoice("login")
					registerSuccess()
				},
			})
		} catch (error) {
			registerRejected()
		}
	}
	return (
		<div className={style.auth}>
			<motion.div
				initial={false}
				variants={animateLoginRegister}
				animate={animate ? "open" : "closed"}
				className={style.wrap}
			>
				<h5 className={style.title} title="Пройдите регистрацию">
					<span>Регистрация</span>
				</h5>
				<form className={style.form} onSubmit={handleSubmit(registerHandler)}>
					<div className={style.field}>
						<label htmlFor="email">E-mail</label>
						<FieldComponent
							id="email"
							{...register("email", {
								required: "E-mail обязателен",
								minLength: {
									message: "Минимальное значеине для E-mail 4 символа",
									value: 4,
								},
								maxLength: {
									message: "Максимальная длина E-mail 100 символов",
									value: 100,
								},
							})}
							errors={errors.email?.message}
						/>
					</div>
					<div className={style.field}>
						<label htmlFor="name">Имя</label>
						<FieldComponent
							id="name"
							{...register("name", {
								required: "Имя обязательное поле",
								minLength: {
									message: "Минимальное значеине для Имени 4 символа",
									value: 4,
								},
								maxLength: {
									message: "Максимальная длина Имени 100 символов",
									value: 100,
								},
							})}
							errors={errors.name?.message}
						/>
					</div>
					<div className={style.field}>
						<label htmlFor="phone-number">Номер телефона</label>
						<FieldComponent
							id="phone-number"
							{...register("phoneNumber", {
								required: "Введите телефоный номер",
							})}
							type="number"
							errors={errors.phoneNumber?.message}
						/>
					</div>
					<div className={style.field}>
						<label htmlFor="password">Пароль</label>
						<FieldComponent
							id="password"
							type="text"
							{...register("password", {
								required: "Введите пароль",
								minLength: {
									message: "Минимальное значеине для Пароля 4 символа",
									value: 4,
								},
							})}
							errors={errors.password?.message}
						/>
					</div>
					<Button
						aria-label="Регистрация"
						btnType="submit"
						isLoading={isPending}
					>
						Регистрация
					</Button>
				</form>
				<div className={style.bottom}>
					<Button onClick={() => setChoice("login")}>
						Авторизация
						<span>
							<IoLogInOutline />
						</span>
					</Button>
					<Button>Условия пользования</Button>
				</div>
			</motion.div>
		</div>
	)
}
