import { IProduct } from "@/interfaces/product.interface"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ICartInitialState {
	products: IProduct[]
	isExist: boolean
}
const initialState: ICartInitialState = {
	isExist: false,
	products: [],
}
interface AddToCartPayload {
	product: IProduct
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
				state.products?.push(payload.product)
				state.isExist = false
			}
			state.isExist = true
			return
		},
		clearCart: (state) => {
			state.isExist = false
			state.products = []
		},
	},
	extraReducers: (build) => {},
})
export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
