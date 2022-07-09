import React from 'react';
import products from '../External Data/Data';
import { Link } from 'react-router-dom'

const Products = () => {
    
  return (
    <div>
        <h2>Products</h2>
        <section>
            {
                products.map((product) => (
                    <div key={product.id}>
                        <h4>{product.name}</h4>
                        <Link to={`/Products/${product.id}`}> More Info</Link>
                    </div>
                ))
            }
        </section>
        
    </div>
  )
}

export default Products