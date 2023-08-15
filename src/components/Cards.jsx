import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaBuyNLarge, FaBuysellads, FaCartPlus, FaGoodreads, FaHeart, FaShare, FaShareSquare } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import ReadMoreButton from './ReadMore'; 
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, addToCart } from "../redux/features/cart/productsSlice"; 
import Swal from 'sweetalert2';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Cards = ({  }) => {



  const data = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const [phoneData, setPhoneData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

    
  const addBasket = (phone)=>{
    dispatch(addToCart(phone))
    Swal.fire({
      icon: 'success',
      title: 'Başarılı!',
      text: 'Ürün sepete eklendi!',
      showConfirmButton: true,
      confirmButtonText:
    'Tamamdır!',
    confirmButtonColor: '#16A20B',
    customClass: 'swal-wide',

     
      timer: 1500, // Bildirimin kaç milisaniye sonra otomatik kapanacağı
    });
  
  }



  const fetchPhoneData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get('https://fakestoreapi.com/products/category/electronics');
      const phones = res.data.slice(0, 6);
      setPhoneData(phones);
      console.log(phones);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPhoneData();
  }, []);

  if (isLoading) {
    return <Spinner animation="border" role="status" />;
  }




  return (
    <Container>
  <h1 className="best-title">Best Sellers</h1>
    
    <Row>
{phoneData.map((phone) => (
      <Col md={4} className='mb-3'>
        <Card key={phone.id} className='phone-container '>
          <Card.Img variant='top' src={phone.image} alt={phone.title} style={{ width: "100%", height: "90px", objectFit: "contain" }} />
          <Card.Body>
          <Link to={'/products/'+phone.id}>   <Card.Title>{phone?.title?.length > 34 ? phone?.title.substring(0,34) + ' ...' : phone?.title}</Card.Title></Link>
            <Card.Text className='phone-category'>Category: {phone.category}</Card.Text>
            <Card.Text className='phone-price'>Price: {phone.price}₺</Card.Text>
            <div className='button-container' style={{ paddingTop: "4%" }}>
              <Button variant="primary" ><FaShareSquare style={{ paddingBottom: "1.5%", marginRight: "4%" }} /></Button>
 
              <Button onClick={() => addBasket(phone)}  variant="success"><FaCartPlus style={{ }}  /></Button>
                
            </div>
          </Card.Body>
        </Card>
      </Col>
      ))}
    
    </Row>
</Container>
    

  );
};

export default Cards;
