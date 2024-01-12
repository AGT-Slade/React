import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">React</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((productsArray) => (
            <div className="product" key={productsArray.slug}>
              <a href={`/product/${productsArray.slug}`}>
                <img src={productsArray.image} alt={productsArray.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${productsArray.slug}`}>
                  <p>{productsArray.name}</p>
                </a>
                <p>
                  <strong>${productsArray.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
