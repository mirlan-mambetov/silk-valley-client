"use client"

import { FieldComponent } from "@/components/field-component/Field-component"
import { Button } from "@/components/specific/[button]/Button"
import { useUser } from "@/hooks/user/useUser"
import { IUser } from "@/interfaces/user.interface"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { MdCheck } from "react-icons/md"
import style from "./user-data.module.scss"
import { IUserDataProps } from "./UserData.props"

export const UserData: FC<IUserDataProps> = ({ setUserData }) => {
	const { user } = useUser()
	const { register, getValues } = useForm<
		Pick<IUser, "email" | "name" | "phoneNumber">
	>({
		mode: "all",
		values: {
			email: user?.email || "",
			name: user?.name || "",
			phoneNumber: user?.phoneNumber || 2,
		},
	})

	const getUserValue = () => {
		const values = getValues()
		setUserData(values)
	}
	return (
		<div className={style.user}>
			<FieldComponent
				{...register("email")}
				defaultValue={user?.email}
				className={style.userItem}
				placeholder={user?.email}
			/>
			<FieldComponent
				{...register("name")}
				defaultValue={user?.name}
				className={style.userItem}
				placeholder={user?.name}
			/>
			<FieldComponent
				{...register("phoneNumber")}
				defaultValue={user?.phoneNumber}
				className={style.userItem}
				placeholder={user?.phoneNumber.toString()}
				type="number"
			/>
			<Button className={style.action} btnType="default" onClick={getUserValue}>
				<MdCheck />
				Изменить
			</Button>
		</div>
	)
}
