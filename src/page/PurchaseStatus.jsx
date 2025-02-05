import React from "react"
import { Navigate, useLocation } from "react-router-dom"

function PurchasePage() {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const status = queryParams.get("status")

  if (status) {
    return (
      <div className="screen">
        <h1>Estado de la compra</h1>
        <br />
        {status === "success" ? (
          <p>La compra se realizó con éxito. Gracias por tu compra.</p>
        ) : status === "error" ? (
          <p>
            Ocurrió un error con la compra. Revisá que el importe no supere el
            crédito disponible en tu cuenta.
          </p>
        ) : (
          <Navigate to="/404" />
        )}
      </div>
    )
  } else {
    return <Navigate to="/404" />
  }
}

export default PurchasePage
