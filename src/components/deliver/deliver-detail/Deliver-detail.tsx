"use client"

import { ButtonComponent } from "@/components/button/Button"
import { useDeliver } from "@/hooks/deliver/useDeliver"
import cn from "classnames"
import { FC, useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import style from "./deliver.detail.module.scss"
import { DeliverDetailForm } from "./form/Deliver-detail-form"

interface IDeliverDetailComponentProps {
	position?: "default" | "fixed"
}
export const DeliverDetailComponent: FC<IDeliverDetailComponentProps> = ({
	position,
}) => {
	const [refine, setRefine] = useState(false)
	const { address } = useDeliver()

	return (
		<div
			className={cn(style.information, style.default, {
				[style.fixed]: position === "fixed",
			})}
		>
			{!refine ? (
				Object.keys(address).length ? (
					<div className={style.wrap}>
						<h5 className={style.title}>
							<span>Координаты доставки</span>
						</h5>
						<div className={style.rows}>
							{address.country && (
								<div className={style.row}>
									<div className={style.content}>
										<small>Страна:</small>
										<span>{address.country}</span>
									</div>
								</div>
							)}
							{address.state && (
								<div className={style.row}>
									<div className={style.content}>
										<small>Область:</small>
										<span>{address.state.replace("область", "")}</span>
									</div>
								</div>
							)}
							{address.city && (
								<div className={style.row}>
									<div className={style.content}>
										<small>Город:</small>
										<span>{address.city.replace("город", "")}</span>
									</div>
								</div>
							)}
							{address.village && (
								<div className={style.row}>
									<div className={style.content}>
										<small>Село:</small>
										<span>{address.village}</span>
									</div>
								</div>
							)}
							{address.town && (
								<div className={style.row}>
									<div className={style.content}>
										<small>Районный центр:</small>
										<span>{address.town}</span>
									</div>
								</div>
							)}
							{address.city_district && (
								<div className={style.row}>
									<div className={style.content}>
										<small>Район:</small>
										<span>{address.city_district}</span>
									</div>
								</div>
							)}
							{address.country_code && (
								<div className={style.row}>
									<div className={style.content}>
										<small>Код страны:</small>
										<span>{address.country_code.toUpperCase()}</span>
									</div>
								</div>
							)}
							{address.road && (
								<div className={style.row}>
									<div className={style.content}>
										<small>Улица:</small>
										<span>{address.road.replace("улица", "")}</span>
									</div>
								</div>
							)}
							{address.house_number && (
								<div className={style.row}>
									<div className={style.content}>
										<small>Дом №:</small>
										<span>{address.house_number}</span>
									</div>
								</div>
							)}
							{address.postCode && (
								<div className={style.row}>
									<div className={style.content}>
										<small>Почтовый индекс:</small>
										<span>{address.postCode}</span>
									</div>
								</div>
							)}
						</div>
					</div>
				) : null
			) : (
				<DeliverDetailForm />
			)}

			<ButtonComponent
				onClick={() => setRefine(!refine)}
				className={style.button}
			>
				<IoSettingsOutline />
				{!refine ? "Уточнить?" : "Готово"}
			</ButtonComponent>
			<div className={style.wrap}>
				<h5 className={style.title}>
					<span>Пункты выдачи</span>
				</h5>
				<div className={style.rows}>
					<div className={style.row}>
						<div className={style.content}>
							<small>г. Каракол:</small>
							<span>Тыныстанова 130</span>
						</div>
					</div>
					<div className={style.row}>
						<div className={style.content}>
							<small>г. Бишкек:</small>
							<span>Ахунбаева 140</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
