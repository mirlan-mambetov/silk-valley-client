import {
	getSessionStorage,
	setSessionStorage,
} from "@/helpers/session.storage.helper"
import { useEffect, useState } from "react"

export const useSessionVisited = () => {
	const [isVisited, setIsVisited] = useState(false)

	useEffect(() => {
		const visited = getSessionStorage()
		if (!visited) {
			setIsVisited(true)
			setSessionStorage("true")
		}
	}, [])

	const handleDismiss = () => {
		setIsVisited(false)
	}

	return { handleDismiss, isVisited }
}
