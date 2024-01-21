import { useEffect, useState } from "react"

export const useScrollHeight = (point: number = 100) => {
	const [isStart, setIsStart] = useState(false)

	const handleScroll = () => {
		setIsStart(window.scrollY > point)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return {
		isStart,
	}
}
