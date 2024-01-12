import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((productsArray) => (
          <div className="product" key={productsArray.slug}>
            <Link to={`/product/${productsArray.slug}`}>
              <img src={productsArray.image} alt={productsArray.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${productsArray.slug}`}>
                <p>{productsArray.name}</p>
              </Link>
              <p>
                <strong>${productsArray.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
