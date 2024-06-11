import {
	ICart,
	ICartPayload,
	IChangeQuantityPayload,
} from "@/interfaces/cart.interface"
import { calculateTotals } from "@/utils/cart.util"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState: ICart = {
	products: [],
	isShow: false,
	totalCache: 0,
	totalDiscount: 0,
}

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, { payload }: PayloadAction<ICartPayload>) => {
			const { product } = payload
			const existingProduct = state.products.find((p) => p.id === product.id)
			if (existingProduct) {
				existingProduct.quantityInCart += product.quantityInCart
			} else {
				state.products.push(product)
			}
			calculateTotals(state)
			state.isShow = true
		},

		clearCart: (state) => {
			state.products = []
			state.totalCache = 0
			state.totalDiscount = 0
			state.isShow = false
		},
		removeFromCart: (
			state,
			{ payload }: PayloadAction<{ productId: number }>
		) => {
			state.products = state.products.filter((p) => p.id !== payload.productId)
			calculateTotals(state)
		},
		changeQuantity: (
			state,
			{ payload }: PayloadAction<IChangeQuantityPayload>
		) => {
			const { id, type } = payload
			const product = state.products.find((product) => product.id === id)
			if (product) {
				if (type === "plus" && product.quantityInCart < product.quantity) {
					product.quantityInCart++
				} else if (type === "minus" && product.quantityInCart > 1) {
					product.quantityInCart--
				}
				calculateTotals(state)
			}
		},
		closeCart: (state) => {
			state.isShow = false
		},
		showCart: (state) => {
			state.isShow = true
		},
	},
	extraReducers: (build) => {},
})
export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
