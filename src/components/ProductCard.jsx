import { Link } from "react-router-dom"

//Je crée une props ProductCard afin de pouvoir  afin d'y stocker les artciles à afficher à chaque fois que je fais appel à cette fonction
function ProductCard({productToDisplay}) {
    return(
        <>
            <Link to={`/products/${productToDisplay.id}/details`}>
                <article>
                    <p>{productToDisplay.title}</p>
                </article>
            </Link>
        </>
    )
}

export default ProductCard