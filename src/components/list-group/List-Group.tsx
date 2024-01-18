import { ICategories } from "@/interfaces/categories.interface"
import Link from "next/link"
import { DetailsHTMLAttributes, FC } from "react"

interface IMenuProps extends DetailsHTMLAttributes<HTMLUListElement> {
	listClassName: string
	listItemClassName: string
	data: ICategories[]
}

export const ListGroupComponent: FC<IMenuProps> = ({
	listClassName,
	listItemClassName,
	data,
	...props
}) => {
	return (
		<ul className={listClassName} {...props}>
			{data.map((link) => (
				<li className={listItemClassName} key={link.name}>
					<Link href={`/${link.alias}`}>{link.name}</Link>
				</li>
			))}
		</ul>
	)
}
