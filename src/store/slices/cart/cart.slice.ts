import { AddToCartPayload, ICartProducts } from "@/interfaces/cart.interface"
import { IProduct } from "@/interfaces/product.interface"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ICartInitialState {
	products: ICartProducts[]
	isExist: boolean
	isAdd: boolean
}
export interface IChangeQuantityPayload extends Pick<IProduct, "id"> {
	type: "minus" | "plus"
}

const initialState: ICartInitialState = {
	isExist: false,
	products: [],
	isAdd: false,
}

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, { payload }: PayloadAction<AddToCartPayload>) => {
			const isExist = state.products?.some(
				(item) => item.id === payload.product.id
			)
			if (!isExist) {
				state.products?.push({ ...payload.product })
				state.isExist = false
				state.isAdd = true
			}
			state.isExist = true
			return
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
				if (color) updatedProduct.color = color
				if (size) updatedProduct.size = size
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
			state.isAdd = false
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
