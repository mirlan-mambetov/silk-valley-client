"use client"

import { SelectLocation } from "@/components/[select-location]/SelectLocation"
import { useScreen } from "@/hooks/screen/useScreen"
import { useMap } from "@/hooks/useMap"
import { FiEdit2 } from "react-icons/fi"
import style from "./destination-point.module.scss"
export const DestinationPoin = () => {
	const { pointDeliverLocation } = useMap()
	const { screenHandle } = useScreen()
	return (
		<span
			className={style.destination}
			onClick={() => {
				!pointDeliverLocation
					? screenHandle({ content: <SelectLocation /> })
					: undefined
			}}
		>
			{`${pointDeliverLocation ? pointDeliverLocation.name : "Выбрать "}`}
			<FiEdit2 />
		</span>
	)
}
