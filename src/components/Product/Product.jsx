import "./Product.css"

export function Product({ product }) {
  return (
    <>
      <img src="/assets/images/image-product.jpg" alt={product.title} />
      <p>
        <strong>{product.title}</strong>
      </p>
      <p className={product.discount ? "discount" : ""}>
        {product.price.toLocaleString("es-ar", {
          style: "currency",
          currency: "ARS",
          minimumFractionDigits: 2,
        })}
      </p>
    </>
  )
}
