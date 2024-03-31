import {
	ICartPayload,
	ICartProduct,
	IChangeQuantityPayload,
} from "@/interfaces/cart.interface"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ICartInitialState {
	products: ICartProduct[]
	isExist: boolean
}

const initialState: ICartInitialState = {
	isExist: false,
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
					quantity: 1,
				})
				state.isExist = false
			}
			state.isExist = true
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
			state.isExist = false
			state.products = []
		},
		removeFromCart: (state, { payload }: PayloadAction<{ id: number }>) => {
			state.products = state.products.filter(
				(product) => product.id !== payload.id
			)
			state.isExist = false
		},
		changedQuantity: (
			state,
			{ payload }: PayloadAction<IChangeQuantityPayload>
		) => {
			const { id, type } = payload
			const product = state.products.find((product) => product.id === id)
			if (product) {
				if (type === "plus" || (type === "minus" && product.quantity > 1)) {
					type === "plus" ? product.quantity++ : product.quantity--
				}
			}
		},
	},
	extraReducers: (build) => {},
})
export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
