"use client"

import { ButtonComponent, LoaderComponent } from "@/components"
import { useLoader } from "@/hooks/app/useLoader"
import { useDeliver } from "@/hooks/deliver/useDeliver"
import { useScreen } from "@/hooks/screen/useScreen"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { MdOutlineCheck } from "react-icons/md"
import style from "./deliver.action.module.scss"

export const DeliverActionComponent = () => {
	const { confirmDeliver, openNotifyHandler, unConfirm } = useStoreActions()
	const { clearContentHandler } = useScreen()
	const { isConfirm } = useDeliver()
	const { isLoading, setLoadingHandler } = useLoader()

	const confirmHandler = async () => {
		setLoadingHandler(1200)
		await new Promise<void>((resolve) => {
			setTimeout(() => {
				openNotifyHandler({
					text: "Адрес потдвержден",
				})
				resolve()
			}, 1200)
		})
		confirmDeliver()
		clearContentHandler()
	}

	return (
		<div className={style.button}>
			{!isConfirm ? (
				<ButtonComponent onClick={confirmHandler}>
					{isLoading ? (
						<LoaderComponent color="black" />
					) : (
						<>
							<span>
								<MdOutlineCheck />
							</span>
							Потдвердить адрес
						</>
					)}
				</ButtonComponent>
			) : (
				<ButtonComponent onClick={() => unConfirm()}>
					{isLoading ? (
						<LoaderComponent color="black" />
					) : (
						<>
							<span>
								<MdOutlineCheck />
							</span>
							Подтверждено
						</>
					)}
				</ButtonComponent>
			)}
		</div>
	)
}
