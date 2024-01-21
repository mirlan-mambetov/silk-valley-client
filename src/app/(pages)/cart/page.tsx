import { Cart } from "./Cart"

const CartPage = () => {
	return (
		<>
			<section>
				<div className="container">
					<h3 className="section-title">Корзина</h3>
					{/* PRODUCT INFORMATION ON CART*/}
					<Cart />
				</div>
			</section>
		</>
	)
}

export default CartPage
