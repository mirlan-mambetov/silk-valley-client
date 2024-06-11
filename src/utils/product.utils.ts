export const calculateDiscount = (price: number, discount: number) => {
	const count = (price * discount) / 100
	return formatPrice(count)
}

export const calculateOldPrice = (price: number, discount: number) => {
	const discountAmount = (price * discount) / 100
	const newPrice = price - discountAmount
	return formatPrice(newPrice)
}

export function formatPrice(price: number) {
	const roundedPrice = Math.ceil(price)
	const formattedPrice = new Intl.NumberFormat("ru-RU", {
		minimumFractionDigits: 2,
		compactDisplay: "short",
	}).format(roundedPrice)

	return formattedPrice
}
