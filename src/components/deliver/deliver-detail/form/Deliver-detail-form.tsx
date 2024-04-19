"use client"

import { ButtonComponent } from "@/components/button/Button"
import { FieldComponent } from "@/components/field-component/Field-component"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { IDeliverForm } from "@/interfaces/deliver.interface"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { RxUpdate } from "react-icons/rx"
import style from "./deliver.detail.form.module.scss"

interface IDeliverDetailFormProps {
	fields: "city" | "road" | "house_number" | "postCode"
}
export const DeliverDetailForm: FC<IDeliverDetailFormProps> = ({ fields }) => {
	const { updateDeliverAddress, closeModalHandler } = useStoreActions()
	const { openNotifyHandler } = useStoreActions()
	const { register, handleSubmit } = useForm<IDeliverForm>({ mode: "onChange" })

	const submitHandler = (data: IDeliverForm) => {
		updateDeliverAddress({ ...data })
		openNotifyHandler({ text: "Изменено" })
		closeModalHandler()
	}
	return (
		<div className={style.wrap}>
			<form className={style.form} onSubmit={handleSubmit(submitHandler)}>
				{fields === "city" && (
					<div className={style.field}>
						<FieldComponent placeholder="Город.(село)" {...register("city")} />
					</div>
				)}
				{fields === "road" && (
					<div className={style.field}>
						<FieldComponent placeholder="Улица" {...register("road")} />
					</div>
				)}
				{fields === "house_number" && (
					<div className={style.field}>
						<FieldComponent
							placeholder="Номер дома"
							{...register("house_number")}
						/>
					</div>
				)}
				{fields === "postCode" && (
					<div className={style.field}>
						<FieldComponent
							placeholder="Почтовый индекс"
							{...register("postCode")}
						/>
					</div>
				)}
				<div className={style.submit}>
					<ButtonComponent btnType="submit" title="Изменить">
						<span>
							<RxUpdate />
						</span>
						Изменить
					</ButtonComponent>
				</div>
			</form>
		</div>
	)
}
