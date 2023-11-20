import { Link } from "react-router-dom"

//J'ajoute un paramètre pageTitle à ma fonction Header afin d'éviter les doublons
function Header( { pageTitle }) {
    return(
        <header>
            {/* Dans mon h1 j'utilise mon paramètre ajouté dans ma fonction, afin de pouvoir l'appeler et le personnaliser dans les pages voulues */}
            <h1>{pageTitle}</h1>
            <nav>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/products">Produits</Link></li>
            </nav>
        </header>
    )
}

export default Header