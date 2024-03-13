"use client"

import { ButtonComponent } from "@/components/button/Button"
import { DeliverComponent } from "@/components/deliver/Deliver"
import { useScreen } from "@/hooks/screen/useScreen"
import { FaMapMarkerAlt } from "react-icons/fa"
import style from "./header.top.module.scss"

export const HeaderTopComponent = () => {
	const { setContentHandler } = useScreen()
	return (
		<div className={style.top}>
			<div className="container">
				<div className={style.wrap}>
					<div className={style.row}>
						<div className={style.deliver}>
							<FaMapMarkerAlt />
							<ButtonComponent
								aria-label="Доставка"
								onClick={() => setContentHandler(<DeliverComponent />)}
							>
								<span>г. Каракол</span>
							</ButtonComponent>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
