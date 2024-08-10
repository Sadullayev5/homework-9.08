import React from 'react'
import axios from 'axios'
import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

const Products = () => {

  const [products , setProducts] = useState([])

  const cutting = (text,limit)=> {
    if (text.length > limit ) {
      return text.slice(0, limit) + "... "
    }
    return text
  }


  useEffect(() => {
    axios("https://fakestoreapi.com/products")
  .then(response => response.data)
  .then(data => setProducts(data))
  }, [])

  return (
    <div>
      <div className="card-wrapper">
      {
        products.map(product =>
          <div key={product.id} className='card'>
            <div className="card-image">
            <img className='card__img' src={product.image} alt="" />
            </div>
            <h3 className='card__title'>{cutting(product.title , 40)}</h3>
            <p className='card__description'>{cutting(product.description , 80)}</p>
            <p>${product.price}</p>
            <Link to={`/singleproduct/${product.id}`} className='card__btn'>More info</Link>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Products