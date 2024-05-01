"use client"

import { DeliverActionComponent } from "@/components"
import { ButtonComponent } from "@/components/button/Button"
import { deliverInformationMotion } from "@/framer-motion/deliver/deliver.motion"
import { useDeliver } from "@/hooks/deliver/useDeliver"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { motion } from "framer-motion"
import { FC, TouchEventHandler, useState } from "react"
import { BsQuestionCircle } from "react-icons/bs"
import { IoCheckmarkCircleOutline } from "react-icons/io5"
import { TbCurrentLocation } from "react-icons/tb"
import { TfiMore, TfiMoreAlt } from "react-icons/tfi"
import style from "./deliver.detail.module.scss"
import { DeliverDetailForm } from "./form/Deliver-detail-form"

interface IDeliverDetailComponentProps {
	position?: "default" | "fixed"
}
export const DeliverDetailComponent: FC<IDeliverDetailComponentProps> = ({
	position,
}) => {
	const [fullView, setFullView] = useState(false)
	const { address } = useDeliver()
	const [touchStartY, setTouchStartY] = useState(0)
	const { openModalHandler } = useStoreActions()

	const handleTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
		setTouchStartY(event.touches[0].clientY)
	}

	const handleTouchMove: TouchEventHandler<HTMLDivElement> = (event) => {
		const touchEndY = event.touches[0].clientY
		const deltaY = touchEndY - touchStartY
		const sensitivity = 50 // Чувствительность для определения направления

		if (deltaY > sensitivity) {
			// Перемещение пальца вниз
			setFullView(false)
		} else if (deltaY < -sensitivity) {
			// Перемещение пальца вверх
			setFullView(true)
		}
	}

	return (
		<motion.div
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			animate={fullView && position === "fixed" ? "open" : "closed"}
			variants={deliverInformationMotion}
			className={style.information}
		>
			{position === "fixed" ? (
				<div className={style.top}>
					<ButtonComponent title="Помощь">
						<BsQuestionCircle />
					</ButtonComponent>
					<ButtonComponent
						onClick={() => setFullView(!fullView)}
						title={fullView ? "Скрыть" : "Показать больше"}
					>
						{!fullView ? <TfiMore /> : <TfiMoreAlt />}
					</ButtonComponent>
					<ButtonComponent title="Текущее местоположение" disabled>
						<TbCurrentLocation />
					</ButtonComponent>
				</div>
			) : null}
			<motion.div
				className={style.columns}
				animate={!fullView ? { y: "100%" } : { y: "0" }}
			>
				{Object.values(address).some((value) => value?.length) ? (
					<div className={style.column}>
						<span className="section-title">Уточнить адрес</span>
						<div className={style.questions}>
							<span
								onClick={() =>
									openModalHandler({
										children: <DeliverDetailForm fields="road" />,
									})
								}
							>
								Улица
							</span>
							<span
								onClick={() =>
									openModalHandler({
										children: <DeliverDetailForm fields="city" />,
									})
								}
							>
								Город.(село)
							</span>
							<span
								onClick={() =>
									openModalHandler({
										children: <DeliverDetailForm fields="house_number" />,
									})
								}
							>
								Номер дома
							</span>
							<span
								onClick={() =>
									openModalHandler({
										children: <DeliverDetailForm fields="postCode" />,
									})
								}
							>
								Почтовый индекс
							</span>
						</div>
					</div>
				) : null}
				<div className={style.column}>
					<h5 className={style.title}>
						<span>Координаты доставки</span>
					</h5>
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
					<DeliverActionComponent />
				</div>
			</motion.div>
		</motion.div>
	)
}
