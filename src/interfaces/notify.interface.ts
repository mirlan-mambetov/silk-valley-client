export interface INotifyInitialState {
	isOpen: boolean
	text?: string
	options?: {
		position?:
			| "topRight"
			| "topLeft"
			| "bottomRight"
			| "bottomLeft"
			| "bottomCenter"
		timeOut?: number | undefined
		backGround?: "black" | "white"
		size?: "xl2" | undefined
	}
	type?: "success" | "error"
}
export interface INotifyPayload extends Omit<INotifyInitialState, "isOpen"> {}
