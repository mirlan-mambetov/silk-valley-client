"use client"

import { Button } from "@/components"
import { useScreen } from "@/hooks/screen/useScreen"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { useMap } from "@/hooks/useMap"
import { IPointsDelivery } from "@/interfaces/select.location.interface"
import cn from "classnames"
import { useEffect } from "react"
import { TiStarOutline } from "react-icons/ti"
import style from "./points-delivery.module.scss"

const data: IPointsDelivery[] = [
	{
		id: 1,
		name: "Город Каракол. Рынок Ак тилек+",
		location: { lat: 42.493098, lng: 78.385388 },
		createdAt: "2002",
		updatedAt: "020202",
	},
	{
		id: 2,
		name: "Город Каракол. ЦУМ. 2 этаж. 211Каб",
		location: { lat: 42.492367, lng: 78.393356 },
		createdAt: "2002",
		updatedAt: "020202",
	},
]
export const PointsDelivery = () => {
	const { addPointsDeliversLocation, addPointDeliverLocation } =
		useStoreActions()
	const { pointDeliverLocation } = useMap()
	const { closeHandle } = useScreen()

	useEffect(() => {
		if (data) {
			addPointsDeliversLocation(data)
		}
	}, [])

	return (
		<div className={style.pointsDelivery}>
			<div className={style.rows}>
				{data.map((points) => (
					<div
						key={points.id}
						className={cn(style.row, {
							[style.active]: points.name === pointDeliverLocation?.name,
						})}
						onClick={() => addPointDeliverLocation(points)}
					>
						<span>Адрес:</span>
						<strong>
							<TiStarOutline />
							{points.name}
						</strong>
					</div>
				))}
				<Button
					disabled={!pointDeliverLocation}
					onClick={closeHandle}
					className={style.btn}
					children={pointDeliverLocation ? "Выбрано" : "Готово"}
				/>
			</div>
		</div>
	)
}
