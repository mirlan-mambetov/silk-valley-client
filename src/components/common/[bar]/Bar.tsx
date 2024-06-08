"use client"

import { Button, SelectLocation } from "@/components"
import { showDestinationName } from "@/helpers/showDestinationName"
import { useScreen } from "@/hooks/screen/useScreen"
import { useMap } from "@/hooks/useMap"
import { MapIcon } from "../[icons]/Map-Icon"
import style from "./bar.module.scss"

export const Bar = () => {
	const { screenHandle } = useScreen()
	const { pointDeliverLocation } = useMap()
	return (
		<div className={style.bar}>
			<div className="container">
				<div className={style.wrap}>
					<div className={style.row}>
						<div className={style.deliver}>
							<MapIcon fill="white" color="white" iconVersion="v2" />
							<Button
								aria-label="Доставка"
								onClick={() => screenHandle({ content: <SelectLocation /> })}
							>
								<span>{showDestinationName(pointDeliverLocation)}</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
