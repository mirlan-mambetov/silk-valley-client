export interface IDialogContent {
	message?: string
}
export interface IDialogInitial {
	dialogContent: IDialogContent
	isActive: boolean
	isConfirm: boolean | undefined
	type?: "notify" | "dialog"
}
export type IDialogPayload = {
	type?: "notify" | "dialog"
} & IDialogContent
