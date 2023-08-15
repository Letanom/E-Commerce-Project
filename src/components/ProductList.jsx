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
import { Link } from 'react-router-dom';



const PhoneList = () => {
  

 const data = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const [phoneData, setPhoneData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const addBasket = (phone)=>{
    dispatch(addToCart(phone))
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



  const fetchPhoneData = async () => {
    try { 
      setIsLoading(true);
      const res = await axios.get('https://fakestoreapi.com/products');
      const phones = res.data.slice(0, 100);
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

    

    <div className='phone-list-container'>
      {phoneData.map((phone) => (
        <Card key={phone.id} className='phone-container '>
          <Card.Img variant='top' src={phone.image} alt={phone.title} style={{ width: "100%", height: "90px", objectFit: "contain" }} />
          <Card.Body>
            <Link to={'/products/'+phone.id}><Card.Title>{phone?.title?.length > 38 ? phone?.title.substring(0,38) + ' ...' : phone?.title}</Card.Title></Link>
            <Card.Text className='phone-category'>Category: {phone.category}</Card.Text>
            <Card.Text className='phone-price'>Price: {phone.price}₺  </Card.Text>
            <Card.Text>
              Açıklama:
              {phone.description.length > 20 ? (
                <div className='read-more'>
                  {phone.description.substring(0, 90)}
                  <ReadMoreButton initialText="Read More " expandedText={phone.description} />
                </div>
              ) : (
                phone.description
              )}
            </Card.Text>
            <div className='button-container' style={{ paddingTop: "4%" }}>
              <Button variant="primary" ><FaShareSquare style={{ paddingBottom: "1.5%", marginRight: "4%" }} /></Button>
 
              <Button onClick={() => addBasket(phone)}  variant="success"><FaCartPlus style={{ }}  /></Button>
        
         
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PhoneList;


