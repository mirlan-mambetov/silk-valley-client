import Link from "next/link"
import style from "./not-found.module.scss"

const NotFoundPage = () => {
	return (
		<div className="container">
			<div className={style.notFound}>
				<span>
					Страница не найдена <b>404</b>
				</span>
				|<Link href={"/"}>Главная</Link>
			</div>
		</div>
	)
}

export default NotFoundPage
