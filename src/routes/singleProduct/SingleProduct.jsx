import { useParams , Link } from "react-router-dom"
import { useState , useEffect } from "react"
import axios from "axios"
import './SingleProduct.css'

const SingleProduct = () => {
    const id = useParams().id
    
    const [product , setProduct] = useState({})

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`)
        .then(response => setProduct(response.data))

    } , [])


  return (
    <div>
        <div className="product-wrapper">
        {
        <div className="product">
            <div className="product-image">\
                <img src={product.image} alt="" />
            </div>
            <div className="product-info">
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <p>Category: {product.category}</p>
                <strong>Price: ${product.price}</strong>
            </div>
            
        </div>
        }
        <Link className="return-btn" to="/products">Back to products</Link>
        </div>
    </div>
  )
}

export default SingleProduct