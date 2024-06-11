import { ICart } from "@/interfaces/cart.interface"

export const calculateTotals = (state: ICart) => {
	state.totalCache = state.products.reduce(
		(total, p) => total + p.price * p.quantityInCart,
		0
	)
	state.totalDiscount = state.products.reduce((discount, p) => {
		if (p.discount) {
			return discount + p.discount * p.quantityInCart
		}
		return discount
	}, 0)
}
