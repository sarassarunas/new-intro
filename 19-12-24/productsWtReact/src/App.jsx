import Product from './components/products/Product'
import products from './assets/products'
import Cart from './components/cart/Cart';
import { useState } from "react";
import './App.css'

function App() {
  const [productDisplay,setProductDisplay] = useState({display:`block`});
  const [cartDisplay,setCartDisplay] = useState({display:`none`});
  return (
    <>
      <div className="container navi">
        <button className='btn' onClick={()=> {setProductDisplay({display:`block`}); setCartDisplay({display:`none`})}}>Product List</button>
        <button className='btn' onClick={()=> {setProductDisplay({display:`none`}); setCartDisplay({display:`block`})}}>Cart</button>
      </div>
      <div className="container productList" style={productDisplay}>
        {products.map((item,idx) =>

          <Product
            image={item.thumbnail}
            title={item.title}
            rating={item.rating}
            desc={item.description}
            price={item.price}
            discount={item.discountPercentage}
            id={item.id}
            key={idx}
          />

        )}
      </div>
      <div className="container buyList" style={cartDisplay}>
          <Cart/>
      </div>
    </>
  )
}

export default App
