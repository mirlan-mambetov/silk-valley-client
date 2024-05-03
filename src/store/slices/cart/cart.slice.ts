import {
	ICartPayload,
	ICartProduct,
	IChangeQuantityPayload,
} from "@/interfaces/cart.interface"
import { calculateDiscount } from "@/utils/product.utils"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ICartInitialState {
	products: ICartProduct[]
	totalPrice: number
	totalDiscount: number
}

const initialState: ICartInitialState = {
	products: [],
	totalPrice: 0,
	totalDiscount: 0,
}

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, { payload }: PayloadAction<ICartPayload>) => {
			const isExist = state.products?.some(
				(item) => item.id === payload.product.id
			)
			if (!isExist) {
				state.products?.push({
					...payload.product,
					productQuantity: 1,
				})
				let totalDiscount = 0
				const totalPrice = state.products.reduce((acc, product) => {
					let total: number = acc + product.price * product.productQuantity // Явно указываем тип переменной total как number
					if (product.discount) {
						const discountAmount: number = parseInt(
							calculateDiscount(product.price, product.discount)
						) // Явно указываем тип переменной discountAmount как number
						total -= discountAmount * product.productQuantity
						totalDiscount += discountAmount * product.productQuantity
					}
					return total
				}, 0)
				state.totalPrice = totalPrice
				state.totalDiscount = totalDiscount
			}
		},

		updateProductAttributeInCart: (
			state,
			{
				payload,
			}: PayloadAction<{ productId: number; color?: string; size?: string }>
		) => {
			const { productId, color, size } = payload
			const productIndex = state.products.findIndex(
				(product) => product.id === productId
			)
			if (productIndex !== -1) {
				const updatedProduct = { ...state.products[productIndex] }
				if (color) updatedProduct.selectedColor = color
				if (size) updatedProduct.selectedSize = size
				state.products[productIndex] = updatedProduct
			}
		},
		clearCart: (state) => {
			state.products = []
		},
		removeFromCart: (state, { payload }: PayloadAction<{ id: number }>) => {
			state.products = state.products.filter(
				(product) => product.id !== payload.id
			)
		},
		changedQuantity: (
			state,
			{ payload }: PayloadAction<IChangeQuantityPayload>
		) => {
			const { id, type } = payload
			const product = state.products.find((product) => product.id === id)
			if (product) {
				if (
					type === "plus" &&
					product.productQuantity &&
					product.productQuantity < product.quantity
				) {
					product.productQuantity++
				} else if (
					type === "minus" &&
					product.productQuantity &&
					product.productQuantity > 1
				) {
					product.productQuantity--
				}
			}
		},
	},
	extraReducers: (build) => {},
})
export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
