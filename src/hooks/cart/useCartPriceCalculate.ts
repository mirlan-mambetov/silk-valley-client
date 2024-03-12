import { ICartProducts } from "@/interfaces/cart.interface"

export const useCartPriceCalculate = (products: ICartProducts[]) => {
	const totalPrice = products.reduce((acc, product) => {
		let total = acc + product.price * product.quantity // Умножаем цену товара на его количество
		if (product.discount) {
			total -=
				calculateDiscount(product.price, product.discount) * product.quantity // Вычитаем скидку из общей цены товара
		}
		return total
	}, 0)

	return { totalPrice }
}

export const calculateDiscount = (price: number, discount: number) => {
	const count = (price * discount) / 100
	return count
}
