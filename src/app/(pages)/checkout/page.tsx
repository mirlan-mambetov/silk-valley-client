import { Metadata } from "next"
import { Checkout } from "./Checkout"

export const metadata: Metadata = {
	title: "Оформить заказ",
	robots: {
		index: false,
		follow: false,
	},
}
const CheckoutPage = () => {
	return <Checkout />
}

export default CheckoutPage
