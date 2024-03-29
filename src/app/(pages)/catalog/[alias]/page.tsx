import { IPageParams } from "@/interfaces/page.interface"
import { Catalog } from "./Catalog"

const CatalogPage = ({ params }: IPageParams) => {
	return (
		<>
			<section>
				<div className="container">
					<Catalog />
				</div>
			</section>
		</>
	)
}

export default CatalogPage
