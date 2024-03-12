import { FC } from "react"
import style from "./notify-placeholder.module.scss"

interface INotifyPlaceholderProps {
	length?: number
}
const NotifyPlaceholder: FC<INotifyPlaceholderProps> = ({ length }) => {
	return length ? <div className={style.placeholder}>{length}</div> : null
}

export default NotifyPlaceholder
