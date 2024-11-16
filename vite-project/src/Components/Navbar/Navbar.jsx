import React, { useState } from 'react';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { GiChickenOven } from "react-icons/gi";
// import { IoSearchSharp } from 'react-icons/io5';
import { RiShoppingCartLine } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import { IoBagCheckOutline } from "react-icons/io5";
// import { IoIosCloseCircleOutline } from 'react-icons/io';
// import { AiFillDelete } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import './Navbar.css'


import Cart from './Cart.png'
import Checkout from '../Checkout/Checkout';
import Login from '../Login/Login';

const NavScrollExample = ({ carts, total, updateCart,resetCart }) => {
  const [cart, setCart] = useState(false);
  const handleCloseCart = () => setCart(false);
  const toggleCart = () => setCart((s) => !s);

  const handleIncreaseQuantity = (id) => {
    updateCart(id, 'increase');
  };

  const handleDecreaseQuantity = (id) => {
    updateCart(id, 'decrease');
  };

  const handleDeleteItem = (id) => {
    updateCart(id, 'delete');
  };

  // const navigate = useNavigate();


  return (

    <Navbar expand="lg" className="bg-white " sticky="top"  >
      <Container> 
        <Navbar.Brand href="#" style={{ color: "#93ab01", fontFamily: "cursive", fontSize: "30px" }} className='brand'>
          Shop<span className="text-primary-emphasis">Ease</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" 
        style={{outline:"none",boxShadow:"none",border:"none"}}
        >

        <div className='d-flex h-100 justify-content-center align-items-center'>

        
        <div className='d-flex'>
        <Nav.Link href="#login" className="text-primary-emphasis" >
              {/* <FaRegUser /> */}
              <Login/>
            </Nav.Link>
        <Nav.Link href="#cart" className="text-primary-emphasis" >
              <RiShoppingCartLine className='mx-3'onClick={toggleCart} />
        </Nav.Link>
        </div>

        <div>
        <span  ><GiChickenOven style={{height:"35px",width:"40px" ,color:"#93ab01"}}/></span>
        </div>

        </div>
      
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className="custom-navbar-collapses">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="text-primary-emphasis fw-semibold">
            <span className='green'>Home</span>
            </Nav.Link>
            <Nav.Link href="#menu" className="text-primary-emphasis fw-semibold">
              <span className='green'>Menu</span>
            </Nav.Link>
            <Nav.Link href="#about" className="text-primary-emphasis fw-semibold">
            <span className='green'>About Us</span>
            </Nav.Link>

            <Nav.Link href="#contact" className="text-primary-emphasis fw-semibold">
            <span className='green'>Contact Us</span>
            </Nav.Link>
          </Nav>

           <Nav className="d-lg-flex d-none">

           {/* <Nav.Link href="#search" className="text-primary-emphasis">
              <IoSearchSharp />
            </Nav.Link> */}

         

             <Nav.Link href="#login" className="text-primary-emphasis" >
              {/* <FaRegUser /> */}
              <Login/>
            </Nav.Link>

            <Nav.Link href="#cart" className="text-primary-emphasis" onClick={toggleCart}>
              <RiShoppingCartLine />
            </Nav.Link>

            {/* <Nav.Link href="#order" className="text-primary-emphasis">
              <IoBagCheckOutline/>
            </Nav.Link> */}

          </Nav>

        </Navbar.Collapse>
      </Container>

      {/* Cart Offcanvas */}
      <Offcanvas placement="end" show={cart} onHide={handleCloseCart}  className="cartoffcanvas">
        <Offcanvas.Header closeButton className='bg-body-tertiary'>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {carts.length === 0 ? (
            <>
          
            {/* <p>Your cart is empty.</p> */}

          <div className='' style={{
 display:"flex", flexDirection:"column", height:"85%",justifyContent:"center", alignItems:"center"
}} >
          <img src={Cart} alt="" className='img-fluid' />  
           <p className='text-text-primary-emphasis opacity-75'>Your Cart is empty.</p>
            <div  id="menu" >
            <button  className='cartbuttons text-white px-3 py-2 border-0 rounded-5 fw-medium' style={{backgroundColor:"#93ab01",fontSize:"13px"}}>GO TO SHOP
            </button>
            </div>
           </div> 
           </>
      
          ) : (
            carts.map((cartItem) => (
              <div className="row pb-4" key={cartItem.id}>
                <div className="col-6">
                  <img
                    src={cartItem.img}
                    alt={cartItem.name}
                    className="img-fluid rounded"
                    style={{ width: "100%", height: "120px", objectFit: "cover" }}
                  />
                </div>
                <div className="ps-5 col-6">
                  <h6>{cartItem.name}</h6>
                  <p>{cartItem.price} x {cartItem.quantity}</p>

                  <button
                    className="btn btn-sm btn-outline-primary mx-1"
                    onClick={() => handleDecreaseQuantity(cartItem.id)}
                    disabled={cartItem.quantity === 1}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-sm btn-outline-success mx-1"
                    onClick={() => handleIncreaseQuantity(cartItem.id)}
                  >
                    +
                  </button>
                  
                   <button className='btn btn-sm btn-outline-danger'  onClick={() => handleDeleteItem(cartItem.id)}>
                   <RiDeleteBin6Line 
                    style={{ width: "20px", height: "20px", cursor: "pointer" }}
                  >
                  </RiDeleteBin6Line >
                   </button>

                </div>
  
              </div>
            ))

            
          )}

          <div className="d-flex justify-content-between">
            <h6 className='text-primary-emphasis'>SUBTOTAL:</h6>
            <h6 className='text-danger'>&#8377;{total}</h6>
          </div>

          {/* <div className="text-center">
            <button className="text-white border-0 px-4 py-2 w-50 rounded-5" style={{ backgroundColor: "#93ab01" }}>
              CHECKOUT
            </button>
          </div> */}




          
 {/* {checkout modal } */}
  <Checkout carts={carts} total={total}
  resetCart={resetCart}/>




        </Offcanvas.Body>
      </Offcanvas>




  
    
      

    </Navbar>
  );
};

export default NavScrollExample;
//---------------------2










