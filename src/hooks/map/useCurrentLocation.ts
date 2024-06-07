import { useEffect, useState } from "react"

interface ILocation {
	lat: number
	lng: number
}
export const useCurrentLocation = () => {
	const [currentLocation, setCurrentLocation] = useState<ILocation | undefined>(
		undefined
	)
	const [errors, setErrors] = useState<string | null>(null)
	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords
					setCurrentLocation({ lat: latitude, lng: longitude })
				},
				(error) => {
					switch (error.code) {
						case error.PERMISSION_DENIED:
							setErrors(
								"Вы запретили доступ в вашему местоположению. Пожалуйста, включите геолокацию и обновите страницу"
							)
							break
						case error.POSITION_UNAVAILABLE:
							setErrors("Информация о вашем местоположении не доступна")
							break
						case error.TIMEOUT:
							setErrors(
								"Время ожидания запроса на получение местоположения истекло."
							)
							break
					}
				}
			)
		} else {
			setErrors("Ваш браузер не поддерживает геолокацию.")
		}
	}, [])
	useEffect(() => {
		if (errors) {
			alert(String(errors))
		}
	}, [errors])
	return { currentLocation, errors }
}
