export interface ILoader {
	isLoading: boolean
	setLoadingHandler: (time?: number) => void
}
