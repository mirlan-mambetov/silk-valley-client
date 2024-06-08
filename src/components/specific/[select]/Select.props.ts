import { IconType } from "react-icons"

export interface ISelectProps<K = string> {
	data: ISelectItem<K>[] | undefined
	onChange: (item: ISelectItem<K>) => void
	value?: ISelectItem<K>
	title?: string
	className?: string
	TitleIcon?: IconType
	isLoading?: boolean
}

export interface ISelectItem<K = string> {
	label: string
	key: K
	isDisable?: boolean
}
