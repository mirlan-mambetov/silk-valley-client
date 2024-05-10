import Cookies from "js-cookie"

export const saveItemToCookie = (
	item: string,
	value: string,
	expires?: number
) => {
	const options: Cookies.CookieAttributes = {}

	if (expires) {
		const expiresMilliseconds = expires * 1000
		const expiresDate = new Date(Date.now() + expiresMilliseconds)
		options.expires = expiresDate
	}
	Cookies.set(item, value, options)
}

export const getItemFormCookie = (itemName: string) => {
	return Cookies.get(itemName)
}

export const clearCookies = (name: string) => {
	Cookies.remove(name)
}
