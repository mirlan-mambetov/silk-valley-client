import { CardsComponent, FooterComponent, SharesComponent } from "@/components"
import { CARDS_PRODUCT } from "@/components/product/product.data"
import { SHARES_DATA } from "@/components/shares/shares.data"
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
			{/* SHARES */}
			<section>
				<div className="container">
					<SharesComponent data={SHARES_DATA} />
				</div>
			</section>
			{/* CARDS*/}
			<section>
				<div className="container">
					<CardsComponent products={CARDS_PRODUCT} />
				</div>
			</section>

			{/* CARDS*/}
			<section>
				<div className="container">
					<CardsComponent
						products={CARDS_PRODUCT}
						limit={6}
						title="Хиты продаж"
					/>
				</div>
			</section>

			{/* WOMANS */}
			{/* <CardsComponent type="woman" products={WOMANS_PRODUCT} /> */}
			<FooterComponent />
		</>
	)
}

export default HomePage
