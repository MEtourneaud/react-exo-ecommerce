import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { products, sortedProducts } from "../utils/products-utils";
import Sidebar from "../components/Sidebar";

function HomePage() {
      //je filtre le tableau products pour en récupérer seulement les éléments qui ont category : "cuisine" 
      const poductsCuisine = products.filter((product) => {
        return product.category === "cuisine" 
      })

      //je découpe ce que j'ai récupéré avant pour n'en n'afficher que les trois derniers
      const lastFiveCuisine = poductsCuisine.slice(-3)

      //je découpe sortedProducts afin de n'afficher que les trois moins chers
      const threeCheapestProducts  = sortedProducts.slice(0,3)

      return(
        <main>
            {/* J'utilise le paramètre que j'ai ajouté à ma fonction Header afin d'y mettre le contenu que je veux en lien avec cette page */}
            <Header pageTitle="Page d'accueil"/>
            <Sidebar currentPage={"HomePage"}/>
            <div>
                <h2>Les 3 derniers produits de la catégorie cuisine</h2>
                {lastFiveCuisine.map((product) => {
                    return(
                      // je crée un Link afin de lier l'article à la variable product.id pour faire afficher le bon élément lié a son id
                        <Link to={`/products/${product.id}/details`}>
                            <article>
                                <p>{product.title}</p>
                            </article>
                        </Link>
                    )
                })}
            </div>
            <div>
                <h2>Les 3 produits les moins chers</h2>
                {threeCheapestProducts.map((product) => {
                    return(
                        <Link to={`/products/${product.id}/details`}>
                            <article>
                                <p>{product.title}</p>
                            </article>
                        </Link>
                    )
                })}
            </div>
            <Footer />
        </main>
      )
}

export default HomePage