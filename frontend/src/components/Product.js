import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Product(props) {
  const { product } = props;
  return (
    //To Replace by Card

    // <div>
    //   <div className="product" key={product.slug}>
    //     <Link to={`/product/${product.slug}`}>
    //       <img src={product.image} alt={product.name} />
    //     </Link>
    //     <div className="product-info">
    //       <Link to={`/product/${product.slug}`}>
    //         <p>{product.name} </p>
    //       </Link>

    //       <p>
    //         <strong>${product.price}</strong>
    //       </p>

    //       <button>Add to cart</button>
    //     </div>
    //   </div>
    // </div>

    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}
export default Product;
