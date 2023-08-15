import React, { useState, useEffect } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const SearchBar = () => {

  



  const [phoneData, setPhoneData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchItem, setSearchItem] = useState('');

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

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

  const filteredItems = searchItem
  ? phoneData.filter((item) => {
      return item.title.toLowerCase().includes(searchItem.toLowerCase());
    })
  : [];

  return (
    <div className='search-bar'>
      <InputGroup>
        <InputGroup.Text><FaSearch/></InputGroup.Text>
        <Form.Control placeholder='Ürünün adını giriniz' aria-label="product name" onChange={handleChange} />
       
      </InputGroup>
      <div className='item-search'>
      {filteredItems.map((item) => (
        <div key={item.id}>
          {/* <p>{item.title}</p> */}
        
          <img style={{width:"30%"}}   src={item.image}/>
          <p style={{fontWeight:"bold"}}>{item.title}</p>
          <p style ={{fontWeight:"bolder"}}>{item.price} ₺</p>
          <p>{item.description}</p>
        </div>
        
      ))}
      </div>
    </div>
  );
};

export default SearchBar;
