import React from 'react'
// import about from './About.png'
import chef1 from './chef1.jpg'
import chef2 from './chef2.jpg'
import chef3 from './chef3.jpg'

import about2 from './About2.png'
import './About.css'
import { SiTicktick } from "react-icons/si";

import { MdDeliveryDining } from "react-icons/md";
import { GiRoastChicken } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";


import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const About = () => {
  return (
    <>
      
      {/* <div className="container-fluid bg-primary"> 
       <div className='position-relative'>
          <div className=''>
          <img src={about} alt="" className='img-fluid aboutimg ' style={{width:"100%",height:"400px" ,objectFit:"cover"}}/>
          </div>
          <div className='text-center position-absolute top-0 bottom-50 text-white'>
              <h4>About ShopEase</h4>
              <h2>To connect people with the best food experience</h2>
              <p>Welcome to ShopEase, where food is just a tap away favourite local restaurants directly to your door</p>
          </div>
         </div> 
 
         <div id="about" className="container-fluid "
         style={{backgroundImage:`url('/src/components/About/Lexica.png')`,height:"600px",filter:`brightness()`,
          backgroundSize:"cover",backgroundPosition:"center",
         display:"flex",alignItems:"center",justifyContent:"center",
         position:"relative",zIndex:"50"
          }}>


<div className=' text-overlay'>
              <h4 className='text1'>About ShopEase</h4>
              <h1 className='text2'>To connect people with the best food experience</h1>
              <p className='text3'>Welcome to ShopEase, where food is just a tap away favourite local restaurants directly to your door</p>
          </div>

             
         </div> */}




<Carousel className='' id="about">

       <Carousel.Item interval={500}>
      <Card className="bg-dark text-white" style={{outline:"none",border:"none"
      }}>
      <Card.Img src={chef2} alt="Card image" className='opacity-50 images' />
      <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-center'>
      <Card.Text className=''><h6 className='texth6 font-monospace'>About ShopEase</h6> </Card.Text>
      <Card.Text className=''><p className='textp'>Welcome to ShopEase, where food is just a tap away favourite local restaurants directly to your door.</p></Card.Text>
      </Card.ImgOverlay>
      </Card>
      </Carousel.Item>

        <Carousel.Item interval={500}>
     <Card className="bg-dark text-white" style={{outline:"none",border:"none"
      }}>
      <Card.Img src={chef1} alt="Card image" className='opacity-50 images' />
      <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-center'>
        <Card.Text className=''><h6 className='texth6 font-monospace'>About ShopEase</h6> </Card.Text>
        <Card.Text className=''><p className='textp '>To connect people with the best food experience.</p></Card.Text>
      </Card.ImgOverlay>
      </Card>
      </Carousel.Item>

      <Carousel.Item>
      <Card className="bg-dark text-white" style={{outline:"none",border:"none"
      }}>
      <Card.Img src={chef3} alt="Card image" className='opacity-50 images' />
      <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-center'>
      <Card.Text className=''><h6 className='texth6 font-monospace'>About ShopEase</h6> </Card.Text>
      <Card.Text className=''><p className='textp'>With user-friendly ordering, secure payments, and fast, reliable delivery and here to elevate your dining experience at home, work, or whenever hunger strikes.</p></Card.Text>
      </Card.ImgOverlay>
      </Card>
      </Carousel.Item>

</Carousel>



         <div className='bg-body-tertiary pt-md-5 py-4'>
         <div className="container">
             
             <div className="row">

                 <div className="col-md-6 parents">
                    <img src={about2} alt="" className='img-fluid
                    about2img '/>
                 </div>

                 <div className="col-md-6">
                   <div className='pt-md-0 pt-5'>
                      <h3 className='text-primary-emphasis'>What We Do</h3>
                      {/* <h3 className='text-primary-emphasis'>Digital Business Grow</h3> */}
                    </div>    
                    <p className='text-primary-emphasis opacity-75 aboutpara pt-md-2 pt-1'>We partner with a wide variety of restaurants, from popular local spots to renowned chains, bringing a diverse selection of cuisines right to your fingertips.
                    </p>
                    <p className='text-primary-emphasis opacity-75 aboutpara pb-md-2 pb-1'>Through our user-friendly app, you can easily browse menus, and our dedicated support team, we are always here to ensure your experience is smooth and satisfying.</p>
                    <ul className='aboutul'
                    style={{color:"#747e9f"}}>
                       <h5 className='text-primary-emphasis font-monospace fw-bold'>Why Choose Us</h5>
                        <li className='list-unstyled'> <SiTicktick style={{color:"#93ab01"}}/> Speed & Convenience.</li>
                        <li className='list-unstyled'><SiTicktick style={{color:"#93ab01"}}/> Quality & Freshness.</li>
                        <li className='list-unstyled'><SiTicktick style={{color:"#93ab01"}}/> Easy Ordering.</li>
                    </ul>
                </div>

             </div>


             <div className='row'>
                  <div className="col-lg-4 col-sm-6">
                       <div className='text-center'>
                       <MdDeliveryDining  className='carthover pb-2'  style={{width:"45px",height:"40px", color:"#93ab01"}}/>
                          <h6 className='text-primary-emphasis'>Delivery To Your</h6>
                           <p className='text-primary-emphasis opacity-75 aboutpara'>Delivery to your door. Up to 20km and it is completely free.</p>
                       </div>
                  </div>     
                    
                   <div className="col-lg-4 col-sm-6">
                       <div className='text-center'>
                       <GiRoastChicken  className='carthover pb-2' style={{width:"38px",height:"40px", color:"#93ab01"}}/>
                          <h6 className='text-primary-emphasis'>Our  ShopEase</h6>
                           <p className='text-primary-emphasis opacity-75 aboutpara'>We partner with restaurants to ensure you receive only the best, freshest food every time you order</p>
                       </div>
                    </div>     
                      
                    <div className="col-lg-4 col-sm-6"> 
                       <div className='text-center'>
                          <FaShoppingCart
                          className='carthover ' style={{width:"30px",height:"40px", color:"#93ab01"}}/>
                          <h6 className='text-primary-emphasis'>Select Your Foods</h6>
                           <p className='text-primary-emphasis opacity-75 aboutpara' >Choose from select produce to start.Keep, add, or remove items.</p>
                       </div>
                  </div>

             </div>

         </div>
         </div>
    
    </>
  )
}

export default About