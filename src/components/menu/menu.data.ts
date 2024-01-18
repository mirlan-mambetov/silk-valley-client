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
				category: {
					alias: "catalog/mens",
					id: 1,
					name: "Мужчинам",
				},
				alias: "catalog/explorer/childs-data-1",
			},
			{
				id: 2,
				alias: "catalog/explorer/childs-data-2",
				name: "Очки",
				category: {
					alias: "catalog/mens",
					id: 1,
					name: "Мужчинам",
				},
			},
			{
				id: 3,
				alias: "catalog/explorer/childs-data-3",
				name: "Джинсы",
				category: {
					alias: "catalog/mens",
					id: 1,
					name: "Мужчинам",
				},
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
				alias: "catalog/explorer/childs-data-4",
				name: "Часы",
				category: {
					alias: "catalog/womans",
					id: 2,
					name: "Женщинам",
				},
			},
			{
				id: 2,
				alias: "catalog/explorer/childs-data-5",
				name: "Платья",
				category: {
					alias: "catalog/womans",
					id: 2,
					name: "Женщинам",
				},
			},
			{
				id: 3,
				alias: "catalog/explorer/childs-data-6",
				name: "Джинсы",
				category: {
					alias: "catalog/womans",
					id: 2,
					name: "Женщинам",
				},
			},
			{
				id: 4,
				alias: "catalog/explorer/childs-data-7",
				name: "Куртки",
				category: {
					alias: "catalog/womans",
					id: 2,
					name: "Женщинам",
				},
			},
			{
				id: 5,
				alias: "catalog/explorer/childs-data-8",
				name: "Обувь",
				category: {
					alias: "catalog/womans",
					id: 2,
					name: "Женщинам",
				},
			},
			{
				id: 6,
				alias: "catalog/explorer/childs-data-9",
				name: "Брюки",
				category: {
					alias: "catalog/womans",
					id: 2,
					name: "Женщинам",
				},
			},
			{
				id: 7,
				alias: "catalog/explorer/childs-data-10",
				name: "Часы",
				category: {
					alias: "catalog/womans",
					id: 2,
					name: "Женщинам",
				},
			},
			{
				id: 8,
				alias: "catalog/explorer/childs-data-11",
				name: "Платья",
				category: {
					alias: "catalog/womans",
					id: 2,
					name: "Женщинам",
				},
			},
			{
				id: 9,
				alias: "catalog/explorer/childs-data-12",
				name: "Джинсы",
				category: {
					alias: "catalog/womans",
					id: 2,
					name: "Женщинам",
				},
			},
			{
				id: 10,
				alias: "catalog/explorer/childs-data-13",
				name: "Куртки",
				category: {
					alias: "catalog/womans",
					id: 2,
					name: "Женщинам",
				},
			},
			{
				id: 11,
				alias: "catalog/explorer/childs-data-14",
				name: "Обувь",
				category: {
					alias: "catalog/womans",
					id: 2,
					name: "Женщинам",
				},
			},
			{
				id: 12,
				alias: "catalog/explorer/childs-data-15",
				name: "Брюки",
				category: {
					alias: "catalog/womans",
					id: 2,
					name: "Женщинам",
				},
			},
			{
				id: 13,
				alias: "catalog/explorer/childs-data-16",
				name: "Часы",
				category: {
					alias: "catalog/womans",
					id: 2,
					name: "Женщинам",
				},
			},
			{
				id: 14,
				alias: "catalog/explorer/childs-data-17",
				name: "Платья",
				category: {
					alias: "catalog/womans",
					id: 2,
					name: "Женщинам",
				},
			},
			{
				id: 15,
				alias: "catalog/explorer/childs-data-18",
				name: "Джинсы",
				category: {
					alias: "catalog/womans",
					id: 2,
					name: "Женщинам",
				},
			},
			{
				id: 16,
				alias: "catalog/explorer/childs-data-19",
				name: "Куртки",
				category: {
					alias: "catalog/womans",
					id: 2,
					name: "Женщинам",
				},
			},
			{
				id: 17,
				alias: "catalog/explorer/childs-data-20",
				name: "Обувь",
				category: {
					alias: "catalog/womans",
					id: 2,
					name: "Женщинам",
				},
			},
			{
				id: 18,
				alias: "catalog/explorer/childs-data-21",
				name: "Брюки",
				category: {
					alias: "catalog/womans",
					id: 2,
					name: "Женщинам",
				},
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
				alias: "catalog/explorer/childs-data-22",
				name: "Памперсы",
				category: {
					alias: "catalog/childs",
					id: 3,
					name: "Детям",
				},
			},
			{
				id: 2,
				alias: "catalog/explorer/childs-data-23",
				name: "Коляски",
				category: {
					alias: "catalog/childs",
					id: 3,
					name: "Детям",
				},
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
				alias: "catalog/explorer/childs-data-24",
				name: "Смартфоны",
				category: {
					alias: "catalog/electronics",
					id: 4,
					name: "Электроника",
				},
			},
			{
				id: 2,
				alias: "catalog/explorer/childs-data-25",
				name: "Ноутбуки",
				category: {
					alias: "catalog/electronics",
					id: 4,
					name: "Электроника",
				},
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
				alias: "catalog/explorer/childs-data-26",
				name: "Детская",
				category: {
					alias: "catalog/obuv",
					id: 5,
					name: "Обувь",
				},
			},
			{
				id: 2,
				alias: "catalog/explorer/childs-data-27",
				name: "Женщинам",
				category: {
					alias: "catalog/obuv",
					id: 5,
					name: "Обувь",
				},
			},
			{
				id: 3,
				alias: "catalog/explorer/childs-data-28",
				name: "Мужчинам",
				category: {
					alias: "catalog/obuv",
					id: 5,
					name: "Обувь",
				},
			},
			{
				id: 4,
				alias: "catalog/explorer/childs-data-29",
				name: "Аксессуары для обуви",
				category: {
					alias: "catalog/obuv",
					id: 5,
					name: "Обувь",
				},
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
				alias: "catalog/explorer/childs-data-30",
				name: "Детское питание",
				category: {
					alias: "catalog/products",
					id: 6,
					name: "Продукты",
				},
			},
			{
				id: 2,
				alias: "catalog/explorer/childs-data-31",
				name: "Напитки",
				category: {
					alias: "catalog/products",
					id: 6,
					name: "Продукты",
				},
			},
			{
				id: 3,
				alias: "catalog/explorer/childs-data-32",
				name: "Подарочные наборы",
				category: {
					alias: "catalog/products",
					id: 6,
					name: "Продукты",
				},
			},
			{
				id: 4,
				alias: "catalog/explorer/childs-data-33",
				name: "Молочные продукты",
				category: {
					alias: "catalog/products",
					id: 6,
					name: "Продукты",
				},
			},
		],
	},
]
