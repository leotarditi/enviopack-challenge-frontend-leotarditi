import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import { RoutesWithNotFound } from "./components/RoutesWithNotFound/RoutesWithNotFound"
import Cart from "./page/Cart"
import Home from "./page/Home"
import PurchasePage from "./page/PurchaseStatus"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<Layout />}>
          <Route path="cart" element={<Cart />} />
          <Route path="purchase-status" element={<PurchasePage />} />
          <Route index element={<Home />} />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  )
}
