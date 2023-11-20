import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../utils/products-utils";
import Sidebar from "../components/Sidebar";

function DetailsPage() {

      //J'utilise la fonction useParams afin d'obtenir les paramètres de l'URL.
      //Je donne à la variable le nom que j'ai utilisé comme paramètre déclaré dans la route dans App.js
      const { productId } = useParams()


      // permet de convertir le type de id (chaine de caractères)
      // car récupérée dans l'url
      // vers un integer
      // il vaut mieux faire la conversion soit même
      // et comparer avec triple égal (strict)
      // plutôt que laisser JS faire la conversion et comparer avec double égal
      const idInt = parseInt(productId)

      const productToDisplay = products.find((product) => {
        return product.id === idInt
      })

      return(
        <>
            <Header pageTitle="Détail de l'article"/>
            <Sidebar currentPage={"DetailsPage"} text={productToDisplay.title}/>
            <div>
              {/* je fais une boucle if afin d'afficher le contenu voulu ou alors afficher un message d'erreur si l'id demandé n'existe pas */}
            {productToDisplay ? (
              <article>
                <h2>Détail  du produit</h2>
                <p>{productToDisplay.title}</p>
              </article>
            ) : (
              <p>Tu fais n'imp !!</p>
            )}
            </div>
            <Footer />
        </>
      )
}

export default DetailsPage