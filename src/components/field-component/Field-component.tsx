"use client"

import { useStoreActions } from "@/hooks/store/useStoreActions"
import { forwardRef, InputHTMLAttributes, useEffect } from "react"
import style from "./field-component.module.scss"

interface IFieldComponent extends InputHTMLAttributes<HTMLInputElement> {
	errors?: string
}
export const FieldComponent = forwardRef<HTMLInputElement, IFieldComponent>(
	({ type, errors, className, ...props }, ref) => {
		const { openNotifyHandler } = useStoreActions()
		useEffect(() => {
			if (errors) {
				openNotifyHandler({
					text: errors,
					type: "error",
					options: {
						position: "bottomCenter",
					},
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
