"use client"

import { FC, PropsWithChildren } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper } from "swiper/react"
import { ISwiperComponentProps } from "./SwiperComponent.props"

export const SwiperComponent: FC<PropsWithChildren<ISwiperComponentProps>> = ({
	options,
	children,
}) => {
	return <Swiper {...options}>{children}</Swiper>
}
