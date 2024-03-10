export const isWindow = (cb: () => void) => {
	if (typeof window !== "undefined") {
		cb()
	}
	return null
}
