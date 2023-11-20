//J'importe les variables liées au react router
import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "./page/HomePage"
import ProductsPage from "./page/ProductsPage"
import DetailsPage from "./page/DetailsPage"

function App() {
  return (
    <>
      {/* je déclare ici entre les balises BrowserRouter mes routes et leur URL  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          {/* j'ajoute ici le paramètre lié l'id de l'élément dans le tableau */}
          <Route path="/products/:productId/details" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
