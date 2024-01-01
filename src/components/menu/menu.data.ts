import { IMenuData, IMenuItems } from "@/interfaces/menu.interface"

export const HEADER_MENU: IMenuData[] = [
	{
		id: 1,
		href: "#",
		name: "Мужчинам",
		childsData: [
			{
				id: 1,
				href: "#",
				name: "Куртки зимние",
				itemId: 1,
			},
			{
				id: 2,
				href: "#",
				name: "Очки",
				itemId: 1,
			},
			{
				id: 3,
				href: "#",
				name: "Джинсы",
				itemId: 1,
			},
		],
	},
	{
		id: 2,
		href: "#",
		name: "Женщинам",
		childsData: [
			{
				id: 1,
				href: "#",
				name: "Часы",
				itemId: 2,
			},
			{
				id: 2,
				href: "#",
				name: "Платья",
				itemId: 2,
			},
			{
				id: 3,
				href: "#",
				name: "Джинсы",
				itemId: 2,
			},
			{
				id: 4,
				href: "#",
				name: "Куртки",
				itemId: 2,
			},
			{
				id: 5,
				href: "#",
				name: "Обувь",
				itemId: 2,
			},
			{
				id: 6,
				href: "#",
				name: "Брюки",
				itemId: 2,
			},
		],
	},
	{
		id: 3,
		href: "#",
		name: "Детям",
		childsData: [
			{
				id: 1,
				href: "#",
				name: "Памперсы",
				itemId: 3,
			},
			{
				id: 2,
				href: "#",
				name: "Коляски",
				itemId: 3,
			},
		],
	},
	{
		id: 4,
		href: "#",
		name: "Электроника",
		childsData: [
			{
				id: 1,
				href: "#",
				name: "Смартфоны",
				itemId: 4,
			},
			{
				id: 2,
				href: "#",
				name: "Ноутбуки",
				itemId: 4,
			},
		],
	},
	{
		id: 5,
		href: "#",
		name: "Обувь",
		childsData: [
			{
				id: 1,
				href: "#",
				name: "Детская",
				itemId: 5,
			},
			{
				id: 2,
				href: "#",
				name: "Женщинам",
				itemId: 5,
			},
			{
				id: 3,
				href: "#",
				name: "Мужчинам",
				itemId: 5,
			},
			{
				id: 4,
				href: "#",
				name: "Аксессуары для обуви",
				itemId: 5,
			},
		],
	},
	{
		id: 6,
		href: "#",
		name: "Продукты",
		childsData: [
			{
				id: 1,
				href: "#",
				name: "Детское питание",
				itemId: 6,
			},
			{
				id: 2,
				href: "#",
				name: "Напитки",
				itemId: 6,
			},
			{
				id: 3,
				href: "#",
				name: "Подарочные наборы",
				itemId: 6,
			},
			{
				id: 4,
				href: "#",
				name: "Молочные продукты",
				itemId: 5,
			},
		],
	},
]

export const HEADER_MENU_SECOND: IMenuItems[] = []
