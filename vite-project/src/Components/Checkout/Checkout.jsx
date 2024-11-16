import React, { useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import './Checkout.css'

const Checkout = ({ carts, total,resetCart }) => {
  const [smShow, setSmShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  
  const handlePlaceOrder = () => {
    // Show success modal
    setSmShow(true);

    // Reset the cart and total after placing the order
    resetCart();
  };
  return (
    <>
      <div className="text-center">
        <button
          onClick={() => handleShow(true)}
          className="text-white border-0 px-4 py-2 w-50 rounded-5 fw-medium contactbuttons"
          style={{ backgroundColor: "#93ab01" }}
        >
          CHECKOUT
        </button>
      </div>
       
      

     <div className="container">
       <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton >
          <Modal.Title className="ps-4">Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row p-4">
        
            <div className="col-lg-6">
              <h3 className="border-bottom border-black pb-2">Billing Details</h3>
              <form action="#" className="forms">
                    
                    
    <div className='flexibles 
    '>
        <div className='w-100'>
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" className='p-2 w-100 mb-4' required/>
        </div>

        <div className='w-100'>
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" className='p-2 w-100  mb-4'  required />
        </div>

    </div>
    

    
   <div className='flexibles'>
   <div className='w-100'>
    <label htmlFor="email">Email Address</label>
    <input type="email" id="email"placeholder='Email'className='p-2 w-100  mb-4' required  />
    </div>

    <div className='w-100'>
    <label htmlFor="phone ">Phone</label>
    <input type="tel" id="phone "placeholder='Number' className='p-2 w-100  mb-4'  required/>
    </div>
   </div>

   





    <div>
    <label htmlFor="address">Address</label>
    <input type="text" id="address"placeholder='Street address' className='p-2 w-100  mb-4' required/>
    </div>

    <div>
    <input type="text" id="address"placeholder='Apartment,Flat,etc.(optional)' className='p-2 w-100  mb-4'/>
    </div>

    <div>
    <label htmlFor="towncity">Town / City</label>
    <input type="text" id="towncity"placeholder='Town / City'className='p-2 w-100  mb-4' />
    </div>

   <div className='flexibles'>
   <div className='w-100'>
    <label htmlFor="statecountry">State / Country</label>
    <input type="text" id="statecountry"placeholder='State / Country' className='p-2 w-100  mb-4' required/>
    </div>

    <div className='w-100'>
    <label htmlFor="postcodezip ">Postcode / Zip</label>
    <input type="text" id="Postcodezip "placeholder='Postcode / Zip' className='p-2 w-100  mb-4' required/>
    </div>
   </div>

              </form>
            </div>

      
            <div className="col-lg-6 p-4 border border-4">
              <h3 className="border-bottom border-black pb-2">Your Order</h3>

              <div className="row border-bottom border-black-50 py-3">
                <div className="col-4"><h6>Product</h6></div>
                <div className="col-4  d-flex justify-content-center"><h6>Product Name</h6></div>
                <div className="col-3  d-flex justify-content-center"><h6>Total</h6></div>
              </div>

              {carts.map((cart, index) => (
                <div className="row border-bottom border-black-50 py-3" key={index}>
                  <div className="col-4">
                    <img src={cart.img} alt="" className="img-fluid rounded" style={{ width: "90px", height: "70px", objectFit: "cover" }} />
                  </div>
                  <div className="col-4 d-flex justify-content-center">
                    <h6 className='pt-4'>{cart.name}</h6>
                  </div>
                  <div className="col-3  d-flex justify-content-center">
                    <h6  className='pt-4'>&#8377;{cart.price * cart.quantity}</h6>
                  </div>
                </div>
              ))}

      <div className="row border-bottom border-black-50 py-3">
                <div className="col-8"><h6>Order Total</h6></div>
                <div className="col-3 d-flex justify-content-center"><h6>&#8377;{total}</h6></div>
              </div>

              <div className="row border-bottom border-black-50 py-3">
                <div className="col-xxl-9 col-sm-5 col-6"><h6>Shipping</h6></div>
                <div className="col-xxl-3 col-sm-5 col-6"><label className="d-flex column-gap-1" style={{fontSize:"12px"}}><input type="radio" required name="shipping" /> Free Shipping</label></div>
              </div>

             

             
              <div className="row">
                <div className="col-12">
  
                  
 <Accordion >

 <Accordion.Item eventKey="0" className='my-3'  style={{outline:"none",boxShadow:"none",border:"none"}} >
 <Accordion.Header>Direct Bank Transfer</Accordion.Header>
 <Accordion.Body>
 Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
 </Accordion.Body>
 </Accordion.Item>

 <Accordion.Item eventKey="1" className='mb-3'  style={{outline:"none",boxShadow:"none",border:"none"}} >
 <Accordion.Header>Cheque Payment</Accordion.Header>
 <Accordion.Body>
 Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
 </Accordion.Body>
 </Accordion.Item>

 <Accordion.Item eventKey="2"  style={{outline:"none",boxShadow:"none",border:"none"}}>
 <Accordion.Header>PayPal</Accordion.Header>
 <Accordion.Body>
 Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
 </Accordion.Body>
 </Accordion.Item>

 </Accordion>

                  <button
                     onClick={handlePlaceOrder}
                    className="buttons rounded-3 border-0 p-3 w-100 fw-bold fs-6 mt-3"
                    style={{ backgroundColor: "#93ab01" }}
                  >
                    PLACE ORDER <IoIosArrowRoundForward style={{ width: "30px", height: "30px", color: "white" }} />
                  </button>

                  <Modal
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                  >
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body className="text-uppercase bg-dark text-white">Your order has been placed successfully</Modal.Body>
                  </Modal>
                </div>

              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

       </div>
    </>
  );
};

export default Checkout;











