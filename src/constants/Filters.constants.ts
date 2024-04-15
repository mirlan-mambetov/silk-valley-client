import { ISelectItem } from "@/components"
import { EnumProductSort } from "@/enums/Filters.enum"

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
	{
		key: EnumProductSort.HIGH_PRICE,
		label: "По возрастанию цены",
	},
	{
		key: EnumProductSort.LOW_PRICE,
		label: "По убыванию цены",
	},
]
