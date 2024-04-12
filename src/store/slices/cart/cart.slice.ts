import {
	ICartPayload,
	ICartProduct,
	IChangeQuantityPayload,
} from "@/interfaces/cart.interface"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ICartInitialState {
	products: ICartProduct[]
}

const initialState: ICartInitialState = {
	products: [],
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
				if (type === "plus" && product.productQuantity < product.quantity) {
					product.productQuantity++
				} else if (type === "minus" && product.productQuantity > 1) {
					product.productQuantity--
				}
			}
		},
		// addAttributeToProduct: (state, {payload}: PayloadAction<ICartAddAttributePayload>) => {
		// 	state.products.
		// }
	},
	extraReducers: (build) => {},
})
export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
