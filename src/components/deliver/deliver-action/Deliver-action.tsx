"use client"

import { useLoader } from "@/hooks/app/useLoader"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import style from "./deliver.action.module.scss"

export const DeliverActionComponent = () => {
	const { confirmDeliver, unConfirm } = useStoreActions()
	// const { clearContentHandler } = useScreen()
	// const { isConfirm } = useDeliver()
	const { isLoading, setLoadingHandler } = useLoader()

	const confirmHandler = async () => {
		setLoadingHandler(1200)
		await new Promise<void>((resolve) => {
			setTimeout(() => {
				// openNotifyHandler({
				// 	text: "Адрес потдвержден",
				// })
				resolve()
			}, 1200)
		})
		confirmDeliver()
		// clearContentHandler()
	}

	return (
		<div className={style.button}>
			{/* {!isConfirm ? (
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
			)} */}
		</div>
	)
}
