import { useState } from "react"

export const useMapClickedBlock = () => {
	const [clickCount, setClickCount] = useState(0)
	const [clickBlocked, setClickBlocked] = useState(false)
	const [lastClickTime, setLastClickTime] = useState(0)

	const TIME_OUT = 60000

	const clickHandler = () => {
		// Если превышен лимит клика по карте
		if (clickBlocked) return
		// Логика вычисления количество кликов по карте
		const currentTime = new Date().getTime()
		const leftTime = currentTime - lastClickTime
		if (leftTime < TIME_OUT) {
			setClickCount(clickCount + 1)
			if (clickCount >= 5) {
				// Блокируем клики по карте
				setClickBlocked(true)
				alert("Вы превысили лимит выбора координат. Попробуйте через минуту")
				return
			}
		} else {
			setClickCount(1)
		}
		setLastClickTime(currentTime)

		// Блокируем клики по карте
		setTimeout(() => {
			setClickBlocked(false)
		}, TIME_OUT)
	}
	return {
		clickHandler,
		clickBlocked,
	}
}
