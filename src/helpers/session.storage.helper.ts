export const setSessionStorage = (value: string) => {
	sessionStorage.setItem("visit", value)
}
export const getSessionStorage = () => {
	const isVisit = sessionStorage.getItem("visit")
	return isVisit
}
export const clearSessionStorage = () => {
	setSessionStorage("true")
}
