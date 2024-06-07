"use client"

import { SelectLocation } from "@/components/[select-location]/SelectLocation"
import { ButtonComponent } from "@/components/button/Button"
import { MapIconComponent } from "@/components/icon/map/Map-icon"
import { useScreen } from "@/hooks/screen/useScreen"
import style from "./header.top.module.scss"

export const HeaderTopComponent = () => {
	const { screenHandle } = useScreen()
	// const { address } = useDeliver()
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
								{/* <span>{showDestinationName(address)}</span> */}
							</ButtonComponent>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
