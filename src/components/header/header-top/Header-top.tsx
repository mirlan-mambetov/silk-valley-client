"use client"

import { ButtonComponent } from "@/components/button/Button"
import { DeliverComponent } from "@/components/deliver/Deliver"
import { MapIconComponent } from "@/components/icon/map/Map-icon"
import { useDeliver } from "@/hooks/deliver/useDeliver"
import { useScreen } from "@/hooks/screen/useScreen"
import style from "./header.top.module.scss"

export const HeaderTopComponent = () => {
	const { setContentHandler } = useScreen()
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
								onClick={() => setContentHandler(<DeliverComponent />)}
							>
								<span>
									{address.city ||
										address.town ||
										address.state ||
										"г. Каракол"}
								</span>
							</ButtonComponent>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
