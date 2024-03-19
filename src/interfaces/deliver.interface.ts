export interface IDeliverPoint {
	city?: string
	road?: string
	house_number?: string
	postCode?: string
	country_code?: string
	country?: string
	state?: string
	city_district?: string
	village?: string
	town?: string
	[key: string]: string | undefined
}
export interface IDeliverForm {
	city?: string
	road?: string
	house_number?: string
	postCode?: string
}
