import "./Product.css"

export function Product({ product }) {
  const price = product.price * (1 - product.discount / 100)

  return (
    <>
      <img src="/assets/images/image-product.jpg" alt={product.title} />
      <p>
        <strong>{product.title}</strong>
      </p>
      <p className={product.discount ? "discount" : ""}>
        {price.toLocaleString("es-ar", {
          style: "currency",
          currency: "ARS",
          minimumFractionDigits: 2,
        })}
      </p>
    </>
  )
}
