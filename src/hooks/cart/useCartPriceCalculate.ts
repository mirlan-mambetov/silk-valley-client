import { ICartProducts } from "@/store/slices/cart/cart.slice"

export const useCartPriceCalculate = (products: ICartProducts[]) => {
	let totalDiscount = 0

	const totalPrice = products.reduce((acc, product) => {
		let total = acc + product.price * product.quantity // Умножаем цену товара на его количество
		if (product.discount) {
			totalDiscount +=
				calculateDiscount(product.price, product.discount) * product.quantity // Учитываем скидку с учетом количества товара
			total -=
				calculateDiscount(product.price, product.discount) * product.quantity // Вычитаем скидку из общей цены товара
		}
		return total
	}, 0)

	return { totalPrice, totalDiscount }
}

export const calculateDiscount = (price: number, discount: number) => {
	const count = (price * discount) / 100
	return count
}
