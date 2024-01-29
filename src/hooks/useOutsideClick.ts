import { usePathname } from "next/navigation"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

type TypeClickOute = {
	elRef: any
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}

const useOutsiteClick = (initialValue: boolean): TypeClickOute => {
	const [isShow, setIsShow] = useState(initialValue)
	const elRef = useRef<HTMLElement>(null)
	const pathName = usePathname()

	const handleClick = (e: any) => {
		if (elRef.current && !elRef.current.contains(e.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		if (isShow) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "auto"
		}
		document.addEventListener("click", handleClick)
		return () => {
			document.removeEventListener("click", handleClick)
		}
	})
	useEffect(() => {
		if (isShow) setIsShow(false)
	}, [pathName])
	return {
		isShow,
		setIsShow,
		elRef,
	}
}

export default useOutsiteClick
