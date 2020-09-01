import { useSelector } from 'react-redux';
import { useState } from 'react';


const ShoppingCart = () => {
  const items = useSelector(state => state.shoppingCart);
  const [isOpen, toggleCart] = useState(false);

  return <div className="shopping-cart">
    <button className="btn btn-primary" type="button" onClick={() => toggleCart(!isOpen)}>
      Shopping cart
    </button>
    
    <ul className="card card-body" style={{display: isOpen ? 'flex' : 'none'}}>
      {items.map( item => {
        return <li key={item.id}>
          <img src={item.image} alt={item.name} />
          <h5>{item.name}</h5>
        </li>
      })}
    </ul>
  </div>
}

export default ShoppingCart;