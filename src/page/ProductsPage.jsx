import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { products, sortedProducts } from "../utils/products-utils";
import Sidebar from "../components/Sidebar";

function ProductsPage() {
      return(
        <>
            <Header pageTitle="Liste de produits"/>
            <Sidebar currentPage={"ProductsPage"}/>
            <article>
            <div>
                <h2>Tout les produits (ordre croissant du prix)</h2>
                {sortedProducts.map((product) => {
                    return(
                        <Link to={`/products/${product.id}/details`}>
                            <article>
                                <p>{product.title}</p>
                            </article>
                        </Link>
                    )
                })}
            </div>
            </article>
            <Footer />
        </>
      )
}

export default ProductsPage