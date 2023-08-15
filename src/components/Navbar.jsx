import React, { useState, useEffect } from 'react';
import { FaCartArrowDown, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector, useDispatch } from 'react-redux';
import { countTotal, removeItem, countTotalPiece } from "../redux/features/cart/productsSlice";


const Navbar = ({ name }) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [totalPiece, setTotalPiece] = useState(0)

  const cartItems = useSelector(state => state.products.cartItems);
  const totalAmount = useSelector(state => state.products.cartTotalAmount);


  useEffect(() => {
    dispatch(countTotal());
    let aa = 0
    cartItems.map(item => {
      aa += item.quantity
    })
    setTotalPiece(aa)
  }, [cartItems]);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand ms-5" to="/">SHOPPING WORLD</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="About">About Us</Link>
            </li>

          </ul>
        </div>
        <div className="nav-right">
          <ul>
            <li>
              <span role='button' id='sepet' onClick={handleShow} className='pointer'>Basket</span>
              <FaCartArrowDown className='m-2' />
            </li>
          </ul>
        </div>
        {/* Show the cart icon for mobile screens */}
        <div className="nav-right-mobile">
          <ul>
            <li>
              <span role='button' id='sepet' onClick={handleShow} className='pointer'>Basket
                <FaCartArrowDown className='m-2' />
              </span>
            </li>
          </ul>
        </div>
      </nav>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Basket</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Title style={{ marginLeft: "4%" }}>Total Product Amount: {totalPiece}</Offcanvas.Title>
        <Offcanvas.Body>
          <ul>
            {cartItems.map(item => (
              <ul className='ul-cart' key={item.id}>
                <img src={item.image} alt={item.title} style={{ width: "70px", height: "50px", objectFit: "contain" }} />
                <li>Product Name: {item.title}</li>
                <li>Price: {item.price * item.quantity}₺</li>
                <li>Amount: {item.quantity}</li>
                <button style={{ backgroundColor: "transparent", border: "none" }} onClick={() => dispatch(removeItem(item))}>
                  <FaTrashAlt className='icon-thr' />
                </button>
              </ul>
            ))}
          </ul>
        </Offcanvas.Body>
        <h5 style={{ margin: "2%" }}>Total Price: {totalAmount} ₺</h5>
        <div className='payment'>
          <button style={{ padding: "4%", margin: "2%" }} className='btn btn-success'>Pay</button>
        </div>
      </Offcanvas>
    </>
  );
};

export default Navbar;
