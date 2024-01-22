import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
//import data from '../data';

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:5000/api/products');
        setProducts(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {products.map((productsArray) => (
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
