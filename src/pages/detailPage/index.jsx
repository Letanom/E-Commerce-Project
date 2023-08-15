import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


import { FaBuyNLarge, FaBuysellads, FaCartPlus, FaGoodreads, FaHeart, FaShare, FaShareSquare } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { addToCart } from '../../redux/features/cart/productsSlice';

const ProductDetail = () => {
    const data = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const {id}= useParams()

 const [product,setProduct] = useState({})
    
    useEffect(()=>{
      (async() =>{
        const productResponse = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(productResponse.data);
      })()
    },[id])

    const addBasket = (product)=>{
        dispatch(addToCart(product))
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Product added to cart!',
          showConfirmButton: true,
          confirmButtonText:
        'Ok!',
        confirmButtonColor: '#16A20B',
    
         
          timer: 1500, 
        });
    
      
      }

   
    console.log(product);
  return (
    <Container className="container-detail">

    <Col md={4} className='mb-3'>
        <h4>{product.title}</h4>
        <img src= {product.image}/>
        <p style={{fontWeight:"bold"}}>{product.price} $</p>
        <p>{product.description}</p>
        <Button className='custom-but' onClick={() => addBasket(product)}  variant="success"><FaCartPlus   /></Button>
        

        
    </Col>


    </Container>
   
  )
}

export default ProductDetail