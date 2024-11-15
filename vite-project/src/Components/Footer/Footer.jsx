import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { AiOutlineSafety  } from "react-icons/ai";
import { TiMessages } from "react-icons/ti";
import { FiInbox } from "react-icons/fi";


import './Footer.css'

const Footer = () => {
  return (
    <>
     
     <div className="container-fluid" style={{backgroundColor:"#171f52"}}> 

     {/* backgroundImage:`url('/src/components/Footer/footer.jpg')`,height:"300px",backgroundSize:"cover",backgroundPosition:"center", */}

      <div className="container pt-lg-5 pt-3 ">

      <div className="row">
          <div className="col-lg-3 col-md-4 col-6">

              <div className='text-center text-white'>
                 <h5> <TbTruckDelivery style={{width:"30px",height:"30px"}} className='footerhover' /></h5> 
                 <h6 style={{fontSize:"13px",textAlign:"center"}}>Fast Delivery</h6>
                 <p className='text-white-50'  style={{fontSize:"14px",textAlign:"center"}}>Across All Over Tamilnadu</p>
              </div>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
              <div className='text-center text-white'>
              <h5> <AiOutlineSafety  style={{width:"30px",height:"30px"}}className='footerhover' /></h5> 
                 <h6 style={{fontSize:"13px",textAlign:"center"}}>Safe Payment</h6>
                 <p className='text-white-50'  style={{fontSize:"14px",textAlign:"center"}}>100% Secure Payment</p>
              </div>
          </div>


          <div className="col-lg-2 col-md-4 col-6">
              <div className='text-center text-white'>
              <h5> <CgSmartHomeRefrigerator style={{width:"30px",height:"30px"}} className='footerhover'/></h5> 
                 <h6 style={{fontSize:"13px",textAlign:"center"}}>No Freezing</h6>
                 <p className='text-white-50'  style={{fontSize:"14px",textAlign:"center"}}>No Freezing & Preservatives</p>
              </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
              <div className='text-center text-white'>
              <h5> <FiInbox style={{width:"30px",height:"30px",}} className='footerhover'/></h5> 
                 <h6 style={{fontSize:"13px",textAlign:"center"}}>Quality & Quantity</h6>
                 <p className='text-white-50'  style={{fontSize:"14px",textAlign:"center"}}>From Handpicked Sellers</p>
              </div> 
          </div>

          <div className="col-lg-2 col-md-4 col-6">
              <div className='text-center text-white'>
              <h5> < TiMessages  style={{width:"30px",height:"30px"}}  className='footerhover'/></h5> 
                 <h6 style={{fontSize:"13px",textAlign:"center"}}>Help Center</h6>
                 <p className='text-white-50'  style={{fontSize:"14px",textAlign:"center"}}>Dedicated 24/7 Support</p>
              </div>
          </div>

          

     </div>


     <div className='row text-center text-white py-4'>
          <div className='col-12'>
          <p style={{fontSize:"13px"}}>Copyright &copy; <span style={{  color:"#93ab01"}}>SHOPEASE</span> all rights reserved.</p>
          <p style={{fontSize:"13px"}}>Designed By <span style={{  color:"#93ab01"}}>Wasim Akram R</span></p>
          </div>
     </div>

      </div>

     </div>

    </>
  )
}

export default Footer