import { Variants } from "framer-motion"

export const deliverInformationMotion: Variants = {
	open: {
		transform: "translateY(0%)",
		height: "100%",
		transition: {
			ease: "easeIn",
			duration: 0.3,
		},
	},
	closed: {
		transform: "translateY(65%)",
		height: "unset",
		transition: {
			ease: "easeIn",
			duration: 0.2,
		},
	},
}
