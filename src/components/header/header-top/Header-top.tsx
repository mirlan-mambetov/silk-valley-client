"use client"

import { ButtonComponent } from "@/components/button/Button"
import { MapIconComponent } from "@/components/icon/map/Map-icon"
import { showDestinationName } from "@/helpers/showDestinationName"
import { useDeliver } from "@/hooks/deliver/useDeliver"
import style from "./header.top.module.scss"

export const HeaderTopComponent = () => {
	// const { setContentHandler } = useScreen()
	const { address } = useDeliver()
	return (
		<div className={style.top}>
			<div className="container">
				<div className={style.wrap}>
					<div className={style.row}>
						<div className={style.deliver}>
							<MapIconComponent fill="white" color="white" iconVersion="v2" />
							<ButtonComponent
								aria-label="Доставка"
								// onClick={() => setContentHandler(<DeliverComponent />)}
							>
								<span>{showDestinationName(address)}</span>
							</ButtonComponent>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
