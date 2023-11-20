import { Link } from "react-router-dom"

function Header() {
    return(
        <header>
            <nav>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/products">Produits</Link></li>
            </nav>
        </header>
    )
}

export default Header