"use client"

import { FC, InputHTMLAttributes } from "react"
import style from "./field-component.module.scss"

interface IFieldComponentProps extends InputHTMLAttributes<HTMLInputElement> {}
export const FieldComponent: FC<IFieldComponentProps> = ({
	type,
	...props
}) => {
	return <input className={style.field} type={type} {...props} />
}
