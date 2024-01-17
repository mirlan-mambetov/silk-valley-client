import { ISelectItem } from "@/components"
import {
	EnumProductPrice,
	EnumProductSort,
	EnumProductSortByAttributes,
} from "@/enums/Filters.enum"

export const PRODUCT_SORT_SELECT_DATA: ISelectItem<EnumProductSort>[] = [
	{
		key: EnumProductSort.NEWEST,
		label: "Новые",
	},
	{
		key: EnumProductSort.OLDEST,
		label: "Старые",
	},
	{
		key: EnumProductSort.POPULAR,
		label: "Популярные",
	},
	{
		key: EnumProductSort.VIEWS,
		label: "Просматриваемые",
	},
]
export const PRODUCT_SORT_SELECT_BY_PRICE: ISelectItem<EnumProductPrice>[] = [
	{
		key: EnumProductPrice.HIGH_PRICE,
		label: "По возрастанию",
	},
	{
		key: EnumProductPrice.LOW_PRICE,
		label: "По убываниб",
	},
]

export const PRODUCT_SORT_SELECT_BY_ATTRIBUTES: ISelectItem<EnumProductSortByAttributes>[] =
	[
		{
			key: EnumProductSortByAttributes.COLOR,
			label: "Цвет",
		},
		{
			key: EnumProductSortByAttributes.SIZE,
			label: "Размер",
		},
	]
