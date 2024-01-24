"use client"

import { FC, PropsWithChildren } from "react"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperProps } from "swiper/react"
import { SwiperOptions } from "swiper/types"

interface ISwiperComponentProps {
	options: SwiperOptions & SwiperProps
}
export const SwiperComponent: FC<PropsWithChildren<ISwiperComponentProps>> = ({
	options,
	children,
}) => {
	return <Swiper {...options}>{children}</Swiper>
}
