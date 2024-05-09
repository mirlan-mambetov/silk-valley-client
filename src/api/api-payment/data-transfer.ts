import {
	EnumOrderStatus,
	EnumPaymentMethod,
	EnumPaymentStatus,
} from "@/enums/Payment.enum"
import { ICartProduct } from "@/interfaces/cart.interface"
import { IDeliverPoint } from "@/interfaces/deliver.interface"

export interface IPaymentDTO {
	status: EnumOrderStatus
	products: ICartProduct[]

	totalPrice: number

	paymentMethod: EnumPaymentMethod

	color?: boolean

	sizes?: boolean

	address: IDeliverPoint
}

export interface IPaymentResponseWithCard {
	id: string
	object: string
	after_expiration: any
	allow_promotion_codes: any
	amount_subtotal: number
	amount_total: number
	cancel_url: string
	client_reference_id: string
	created: number
	currency: string
	customer_details: CustomerDetails
	customer_email: string
	expires_at: number
	invoice: any
	livemode: boolean
	mode: string
	payment_intent: any
	payment_link: any
	payment_method_collection: string
	payment_method_configuration_details: any
	payment_method_options: PaymentMethodOptions
	payment_method_types: string[]
	payment_status: string
	phone_number_collection: PhoneNumberCollection
	status: EnumPaymentStatus
	success_url: string
	url: string
}
export interface CustomerDetails {
	address: any
	email: string
	name: any
	phone: any
	tax_exempt: string
	tax_ids: any
}

export interface PaymentMethodOptions {
	card: Card
}

export interface Card {
	request_three_d_secure: string
}

export interface PhoneNumberCollection {
	enabled: boolean
}
