import './Products.css';

export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img 
              src='/assets/images/image-product.jpg'
              alt={product.title} 
            />
            <div>
              <strong>{product.title}</strong>
              <p>{product.price}</p>
            </div>
            <div>
              <button>
                Agregar al carrito
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}