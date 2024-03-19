"use client"

import { ButtonComponent } from "@/components/button/Button"
import { FieldComponent } from "@/components/field-component/Field-component"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { IDeliverForm } from "@/interfaces/deliver.interface"
import { FC } from "react"
import { useForm } from "react-hook-form"
import style from "./deliver.detail.form.module.scss"

export const DeliverDetailForm: FC = () => {
	const { updateDeliverAddress } = useStoreActions()
	const { openNotifyHandler } = useStoreActions()
	const { register, handleSubmit } = useForm<IDeliverForm>({ mode: "onChange" })

	const submitHandler = (data: IDeliverForm) => {
		updateDeliverAddress({ ...data })
		openNotifyHandler("Изменено")
	}

	return (
		<div className={style.wrap}>
			<span className="section-title">Уточнить адрес</span>
			<form className={style.form} onSubmit={handleSubmit(submitHandler)}>
				<div className={style.field}>
					<FieldComponent placeholder="Город.(село)" {...register("city")} />
				</div>
				<div className={style.field}>
					<FieldComponent placeholder="Улица" {...register("road")} />
				</div>
				<div className={style.field}>
					<FieldComponent
						placeholder="Номер дома"
						{...register("house_number")}
					/>
				</div>
				<div className={style.field}>
					<FieldComponent
						placeholder="Почтовый индекс"
						{...register("postCode")}
					/>
				</div>
				<ButtonComponent btnType="submit" children="Изменить" />
			</form>
		</div>
	)
}
