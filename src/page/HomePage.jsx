import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

function HomePage() {
    const products = [
        {
          id: 1,
          title: "micro-onde",
          publicationDate: "2021-09-01",
          price: 100,
          description: "chauffe les aliments",
          category: "cuisine",
        },
        {
          id: 2,
          title: "four",
          publicationDate: "2021-10-01",
          price: 150,
          description: "chauffe les aliments",
          category: "cuisine",
        },
        {
          id: 3,
          title: "lave-linge",
          publicationDate: "2021-11-01",
          price: 400,
          description: "lave les linges",
          category: "electromenager",
        },
        {
          id: 4,
          title: "lave-vaisselle",
          publicationDate: "2021-08-01",
          price: 200,
          description: "lave les vaisselles",
          category: "electromenager",
        },
        {
          id: 5,
          title: "aspirateur",
          publicationDate: "2022-02-01",
          price: 720,
          description: "aspire les poussières",
          category: "electromenager",
        },
        {
          id: 6,
          title: "cuisinière",
          publicationDate: "2022-12-01",
          price: 350,
          description: "cuit les aliments",
          category: "cuisine",
        },
        {
          id: 7,
          title: "réfrigérateur",
          publicationDate: "2022-03-01",
          price: 600,
          description: "refroidit les aliments",
          category: "cuisine",
        },
        {
          id: 8,
          title: "congélateur",
          publicationDate: "2022-04-01",
          price: 450,
          description: "congèle les aliments",
          category: "cuisine",
        },
        {
          id: 9,
          title: "télévision",
          publicationDate: "2022-10-10",
          price: 700,
          description: "affiche des images",
          category: "electromenager",
        },
        {
          id: 10,
          title: "ordinateur",
          publicationDate: "2022-06-01",
          price: 1000,
          description: "affiche des images",
        },
      ];

      //je filtre le tableau products pour en récupérer seulement les éléments qui ont category : "cuisine" 
      const poductsCuisine = products.filter((product) => {
        return product.category === "cuisine" 
      })

      //je découpe ce que j'ai récupéré avant pour n'en n'afficher que les trois derniers
      const lastFiveCuisine = poductsCuisine.slice(-3)

      //je trie mes produits dans l'ordre croissant
      const sortedProducts  = products.sort((a, b) => {
        return a.price - b.product
      })

      //je découpe sortedProducts afin de n'afficher que les trois moins chers
      const threeCheapestProducts  = sortedProducts.slice(0,3)

      return(
        <main>
            <Header />
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