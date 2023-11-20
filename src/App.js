import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "./page/HomePage"
import ProductsPage from "./page/ProductsPage"
import DetailsPage from "./page/DetailsPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId/details" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
