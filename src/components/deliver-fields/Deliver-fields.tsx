"use client"

import { IDeliverPoint } from "@/interfaces/deliver.interface"
import { FC } from "react"
import { IoCheckmarkCircleOutline } from "react-icons/io5"
import style from "./deliver.fields.module.scss"

interface IDeliverFieldsProps {
	address: IDeliverPoint
}
export const DeliverFields: FC<IDeliverFieldsProps> = ({ address }) => {
	return (
		<div className={style.rows}>
			{address.country && (
				<div className={style.row}>
					<small>Страна:</small>
					<span>
						<b title="Подтверждено">
							<IoCheckmarkCircleOutline />
						</b>
						{address.country}
					</span>
				</div>
			)}
			{address.state && (
				<div className={style.row}>
					<small>Область:</small>
					<span>
						<b title="Подтверждено">
							<IoCheckmarkCircleOutline />
						</b>
						{address.state.replace("область", "")}
					</span>
				</div>
			)}
			{address.city && (
				<div className={style.row}>
					<small>Город:</small>
					<span>
						<b title="Подтверждено">
							<IoCheckmarkCircleOutline />
						</b>
						{address.city.replace("город", "")}
					</span>
				</div>
			)}
			{address.village && (
				<div className={style.row}>
					<small>Село:</small>
					<span>
						<b title="Подтверждено">
							<IoCheckmarkCircleOutline />
						</b>
						{address.village}
					</span>
				</div>
			)}
			{address.town && (
				<div className={style.row}>
					<small>Районный центр:</small>
					<span>
						<b title="Подтверждено">
							<IoCheckmarkCircleOutline />
						</b>
						{address.town}
					</span>
				</div>
			)}
			{address.city_district && (
				<div className={style.row}>
					<small>Район:</small>
					<span>
						<b title="Подтверждено">
							<IoCheckmarkCircleOutline />
						</b>
						{address.city_district}
					</span>
				</div>
			)}
			{address.country_code && (
				<div className={style.row}>
					<small>Код страны:</small>
					<span>
						<b title="Подтверждено">
							<IoCheckmarkCircleOutline />
						</b>
						{address.country_code.toUpperCase()}
					</span>
				</div>
			)}
			{address.road && (
				<div className={style.row}>
					<small>Улица:</small>
					<span>
						<b title="Подтверждено">
							<IoCheckmarkCircleOutline />
						</b>
						{address.road.replace("улица", "")}
					</span>
				</div>
			)}
			{address.house_number && (
				<div className={style.row}>
					<small>Дом №:</small>
					<span>
						<b title="Подтверждено">
							<IoCheckmarkCircleOutline />
						</b>
						{address.house_number}
					</span>
				</div>
			)}
			{address.postCode && (
				<div className={style.row}>
					<small>Почтовый индекс:</small>
					<span>
						<b title="Подтверждено">
							<IoCheckmarkCircleOutline />
						</b>
						{address.postCode}
					</span>
				</div>
			)}
		</div>
	)
}
