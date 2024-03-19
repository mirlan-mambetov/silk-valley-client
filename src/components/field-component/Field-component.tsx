"use client"

import { forwardRef, InputHTMLAttributes } from "react"
import style from "./field-component.module.scss"

interface IFieldComponent extends InputHTMLAttributes<HTMLInputElement> {
	errors?: string
}
export const FieldComponent = forwardRef<HTMLInputElement, IFieldComponent>(
	({ type, errors, className, ...props }, ref) => {
		return (
			<>
				<input className={style.field} type={type} {...props} ref={ref} />
				{/* {errors && <span className={style.error_text}>{errors}</span>} */}
			</>
		)
	}
)
