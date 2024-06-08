"use client"

import { useCurrentLocation } from "@/hooks/map/useCurrentLocation"
import cn from "classnames"
import dynamic from "next/dynamic"
import { FC, useState } from "react"
import { PointsDelivery } from "../[points-delivery]/PointsDelivery"
import { ISelectLocationProps } from "./SelectLocation.props"
import style from "./select.location.module.scss"

const MapContainerComponent = dynamic(
	async () => await import("../[map]/MapContainer"),
	{
		ssr: false,
	}
)
export const SelectLocation: FC<ISelectLocationProps> = () => {
	const [choiceValue, setChoiceValue] = useState<
		"CourierDelivery" | "PointsDelivery" | undefined
	>("PointsDelivery")

	const { currentLocation } = useCurrentLocation()

	return (
		<div className={style.selectLocation}>
			<div className={style.wrap}>
				<div className={style.head}>
					<div
						className={style.box}
						onClick={() => setChoiceValue("PointsDelivery")}
					>
						Пункты выдачи
					</div>
					<div
						title="Скоро"
						className={cn(style.box, style.disable)}
						// onClick={() => setChoiceValue("CourierDelivery")}
					>
						Курьер
					</div>
				</div>
				<div className={style.content}>
					{choiceValue === "PointsDelivery" ? <PointsDelivery /> : "Courier"}
				</div>
			</div>
			{currentLocation && (
				<MapContainerComponent currentLocation={currentLocation} />
			)}
		</div>
	)
}
