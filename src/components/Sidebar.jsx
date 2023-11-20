import "./Sidebar.css"

function Sidebar({currentPage, text}) {
    return(
        <div className="sidebar">
            {currentPage == "HomePage" && (
                <h2>Le titre du site</h2>
            )}
            {currentPage == "ProductsPage" && (
                <h2>Vous consultez la liste des produits</h2>
            )}
            {currentPage == "DetailsPage" && (
                <h2>{`Vous consultez le produit ${text}`}</h2>
            )}
        </div>
    )
}

export default Sidebar