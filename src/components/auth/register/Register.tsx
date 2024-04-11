"use client"

import { useRegisterUserMutation } from "@/api/api-auth/api-auth"
import { IUserRegisterDTO } from "@/api/api-user/data.transfer"
import { ButtonComponent, FieldComponent } from "@/components"
import { animateLoginRegister } from "@/framer-motion/auth/auth.animate"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { motion } from "framer-motion"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { IoLogInOutline } from "react-icons/io5"
import style from "../auth-form.module.scss"
import { IAuthProps } from "../auth.props"

export const RegisterComponent: FC<IAuthProps> = ({ animate, setChoice }) => {
	const {
		registerPending,
		registerRejected,
		registerSuccess,
		openNotifyHandler,
	} = useStoreActions()
	const [registerUser, result] = useRegisterUserMutation()
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<IUserRegisterDTO>({ mode: "onChange" })
	const registerHandler = async (data: IUserRegisterDTO) => {
		registerPending()
		await registerUser(data)
			.unwrap()
			.then((res) => {
				if (res.success) {
					openNotifyHandler({
						text: res.message,
						options: {
							size: "xl2",
							timeOut: 2000,
							position: "topRight",
						},
						type: "success",
					})
					setChoice("login")
					registerSuccess()
				}
			})
			.catch((err) => {
				registerRejected()
				openNotifyHandler({
					text: err.data.message,
					options: {
						size: "xl2",
						timeOut: 3000,
					},
					type: "error",
				})
			})
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
					<ButtonComponent
						aria-label="Регистрация"
						btnType="submit"
						isLoading={result.isLoading}
					>
						Регистрация
					</ButtonComponent>
				</form>
				<div className={style.bottom}>
					<ButtonComponent onClick={() => setChoice("login")}>
						Авторизация
						<span>
							<IoLogInOutline />
						</span>
					</ButtonComponent>
					<ButtonComponent>Условия пользования</ButtonComponent>
				</div>
			</motion.div>
		</div>
	)
}
