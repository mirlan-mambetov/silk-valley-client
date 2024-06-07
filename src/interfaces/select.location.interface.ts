import { IBase } from "./base.interface"
import { IGeo } from "./geo.interface"

export interface IPointsDelivery extends IBase {
	name: string
	location: IGeo
}
