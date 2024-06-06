"use client"

import { useNotification } from "@/hooks/useNotification"
import { forwardRef, InputHTMLAttributes, useEffect } from "react"
import style from "./field-component.module.scss"

interface IFieldComponent extends InputHTMLAttributes<HTMLInputElement> {
	errors?: string
}
export const FieldComponent = forwardRef<HTMLInputElement, IFieldComponent>(
	({ type, errors, className, ...props }, ref) => {
		const { addNotification } = useNotification()
		useEffect(() => {
			if (errors) {
				addNotification({
					message: errors,
				})
			}
		}, [errors])
		return (
			<>
				<input className={style.field} type={type} {...props} ref={ref} />
				{/* {errors && <span className={style.error_text}>{errors}</span>} */}
			</>
		)
	}
)
