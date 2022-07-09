import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import products from '../External Data/Data';
import '../App.css';

const SharedProducts = () => {
    const navigate = useNavigate();
    
    const { productId } = useParams();
    
    const product = products.find((product) => product.id === productId);
    
    const {name, image} = product

    function goToProducts(){
        navigate('/Products');
    }

  return (
    <div>
        <h1>Shared Products</h1>
        <h3>{ name }</h3>
        <img src={image} alt={name} /><br/>
        <button onClick={goToProducts}> Back to Products</button>
    </div>
  )
}

export default SharedProducts