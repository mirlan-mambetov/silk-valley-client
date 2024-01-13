import { IMenuData } from "@/interfaces/menu.interface"

export const HEADER_MENU: IMenuData[] = [
	{
		id: 1,
		alias: "catalog/mens",
		name: "Мужчинам",
		childsData: [
			{
				id: 1,
				name: "Куртки зимние",
				itemId: 1,
				alias: "#",
			},
			{
				id: 2,
				alias: "#",
				name: "Очки",
				itemId: 1,
			},
			{
				id: 3,
				alias: "#",
				name: "Джинсы",
				itemId: 1,
			},
		],
	},
	{
		id: 2,
		alias: "catalog/womans",
		name: "Женщинам",
		childsData: [
			{
				id: 1,
				alias: "#",
				name: "Часы",
				itemId: 2,
			},
			{
				id: 2,
				alias: "#",
				name: "Платья",
				itemId: 2,
			},
			{
				id: 3,
				alias: "#",
				name: "Джинсы",
				itemId: 2,
			},
			{
				id: 4,
				alias: "#",
				name: "Куртки",
				itemId: 2,
			},
			{
				id: 5,
				alias: "#",
				name: "Обувь",
				itemId: 2,
			},
			{
				id: 6,
				alias: "#",
				name: "Брюки",
				itemId: 2,
			},
		],
	},
	{
		id: 3,
		alias: "catalog/childs",
		name: "Детям",
		childsData: [
			{
				id: 1,
				alias: "#",
				name: "Памперсы",
				itemId: 3,
			},
			{
				id: 2,
				alias: "#",
				name: "Коляски",
				itemId: 3,
			},
		],
	},
	{
		id: 4,
		alias: "catalog/electronics",
		name: "Электроника",
		childsData: [
			{
				id: 1,
				alias: "#",
				name: "Смартфоны",
				itemId: 4,
			},
			{
				id: 2,
				alias: "#",
				name: "Ноутбуки",
				itemId: 4,
			},
		],
	},
	{
		id: 5,
		alias: "catalog/obuv",
		name: "Обувь",
		childsData: [
			{
				id: 1,
				alias: "#",
				name: "Детская",
				itemId: 5,
			},
			{
				id: 2,
				alias: "#",
				name: "Женщинам",
				itemId: 5,
			},
			{
				id: 3,
				alias: "#",
				name: "Мужчинам",
				itemId: 5,
			},
			{
				id: 4,
				alias: "#",
				name: "Аксессуары для обуви",
				itemId: 5,
			},
		],
	},
	{
		id: 6,
		alias: "catalog/products",
		name: "Продукты",
		childsData: [
			{
				id: 1,
				alias: "#",
				name: "Детское питание",
				itemId: 6,
			},
			{
				id: 2,
				alias: "#",
				name: "Напитки",
				itemId: 6,
			},
			{
				id: 3,
				alias: "#",
				name: "Подарочные наборы",
				itemId: 6,
			},
			{
				id: 4,
				alias: "#",
				name: "Молочные продукты",
				itemId: 5,
			},
		],
	},
]
