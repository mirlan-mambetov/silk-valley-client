import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

type TypeClickOute = {
	elRef: any
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}

const useOutsiteClick = (initialValue: boolean): TypeClickOute => {
	const [isShow, setIsShow] = useState(initialValue)
	const elRef = useRef<HTMLElement>(null)

	const handleClick = (e: any) => {
		if (elRef.current && !elRef.current.contains(e.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener("click", handleClick)
		return () => {
			document.removeEventListener("click", handleClick)
		}
	})
	return {
		isShow,
		setIsShow,
		elRef,
	}
}

export default useOutsiteClick
