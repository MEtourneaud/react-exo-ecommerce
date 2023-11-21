import Footer from "../components/Footer";
import Header from "../components/Header";
import { products, sortedProducts } from "../utils/products-utils";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";

function ProductsPage() {
      return(
        <>
            <Header pageTitle="Liste de produits"/>
            <Sidebar currentPage={"ProductsPage"}/>
            <article>
            <div>
                <h2>Tout les produits (ordre croissant du prix)</h2>
                {sortedProducts.map((product) => {
                    //Ici je fais appel à mon composant ProductCard pour utiliser la props qui affichera les produits stockés dans cette props
                    return(<ProductCard productToDisplay={product}/>)
                })}
            </div>
            </article>
            <Footer />
        </>
      )
}

export default ProductsPage