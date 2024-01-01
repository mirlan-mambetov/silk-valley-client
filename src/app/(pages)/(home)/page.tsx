import { Banner } from "./Banner/Banner"
import { BANNER_DATA } from "./Banner/banner.data"
import style from "./home.module.scss"

const HomePage = () => {
	return (
		<>
			{/* BANNER HERO */}
			<section className={style.banner}>
				<div className="container">
					<Banner data={BANNER_DATA} />
				</div>
			</section>
		</>
	)
}

export default HomePage
