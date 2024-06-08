"use client"

import { SelectLocation } from "@/components/[select-location]/SelectLocation"
import { ButtonComponent } from "@/components/button/Button"
import { MapIconComponent } from "@/components/icon/map/Map-icon"
import { showDestinationName } from "@/helpers/showDestinationName"
import { useScreen } from "@/hooks/screen/useScreen"
import { useMap } from "@/hooks/useMap"
import style from "./header.top.module.scss"

export const HeaderTopComponent = () => {
	const { screenHandle } = useScreen()
	const { pointDeliverLocation } = useMap()
	return (
		<div className={style.top}>
			<div className="container">
				<div className={style.wrap}>
					<div className={style.row}>
						<div className={style.deliver}>
							<MapIconComponent fill="white" color="white" iconVersion="v2" />
							<ButtonComponent
								aria-label="Доставка"
								onClick={() => screenHandle({ content: <SelectLocation /> })}
							>
								<span>{showDestinationName(pointDeliverLocation)}</span>
							</ButtonComponent>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
