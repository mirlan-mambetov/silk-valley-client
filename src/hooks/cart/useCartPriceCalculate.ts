import { ICartProduct } from "@/interfaces/cart.interface"

export const useCartPriceCalculate = (products: ICartProduct[]) => {
	let totalDiscount = 0
	const totalPrice = products.reduce((acc, product) => {
		let total = acc + product.price * product.productQuantity // Умножаем цену товара на его количество
		if (product.discount) {
			total -=
				calculateDiscount(product.price, product.discount) *
				product.productQuantity // Вычитаем скидку из общей цены товара
			totalDiscount +=
				calculateDiscount(product.price, product.discount) *
				product.productQuantity
		}
		return total
	}, 0)

	return { totalPrice, totalDiscount }
}

export const calculateDiscount = (price: number, discount: number) => {
	const count = (price * discount) / 100
	return count
}
