import { FC } from "react"
import { LuUser } from "react-icons/lu"
import { IIconProps } from "../map.props"

export const UserIconComponent: FC<IIconProps> = (props) => {
	return <LuUser {...props} />
}
