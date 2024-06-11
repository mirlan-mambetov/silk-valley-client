"use client"

import StepProgressBar from "react-step-progress"
import "react-step-progress/dist/index.css"
import { StepOne } from "./[Step-1]"
import { StepTwo } from "./[Step-2]"
import { StepThree } from "./[Step-3]"
import { StepFour } from "./[Step-4]"
import style from "./steps.module.scss"

export const Steps = () => {
	function onFormSubmit() {}
	return (
		<StepProgressBar
			wrapperClass={style.wrapp}
			startingStep={0}
			onSubmit={onFormSubmit}
			buttonWrapperClass={style.buttons}
			labelClass={style.label}
			progressClass={style.progress}
			contentClass={style.content}
			stepClass={style.step}
			nextBtnName="Потдвердить"
			previousBtnName="Назад"
			steps={[
				{
					label: "Информация о получателе",
					name: "step 1",
					content: <StepOne />,
				},
				{
					label: "Пункт доставки",
					name: "step 2",
					content: <StepTwo />,
					// validator: step2Validator
				},
				{
					label: "Метод оплаты",
					name: "step 3",
					content: <StepThree />,
					// validator: step3Validator
				},
				{
					label: "Потдверждение",
					name: "step 4",
					content: <StepFour />,
					// validator: step3Validator
				},
			]}
		/>
	)
}
