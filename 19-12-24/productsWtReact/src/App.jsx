import Product from './components/products/Product'
import products from './assets/products'
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        {products.map((item,idx) =>

          <Product
            image={item.thumbnail}
            title={item.title}
            rating={item.rating}
            desc={item.description}
            price={item.price}
            discount={item.discountPercentage}
            key={idx}
          />

        )}
      </div>
    </>
  )
}

export default App
