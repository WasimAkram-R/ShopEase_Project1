import React from 'react'
import './Hero_section.css'
import HeroImage from './Hero_section.png'

const Hero_section = () => {
  return (
    <>
     
       {/* <div className='container-fluid bg-body-tertiary'> */}
       <div className='container ' id="home">
           <div className='row'>
               <div className='col-md-6  pt-md-5 pt-0  order-last order-md-first'>
                    <h5 className='heross' style={{color:"#93ab01"}}>Craving Something? Order Now</h5>
                   {/* <div className='text-primary-emphasis py-md-3 py-1   heroheading' >
                      <h1 className='herospace'><span className='hero'>Choose Your</span></h1> 
                      <h1 className='hero'>Healthy Food</h1>                   
                   </div>  */}

                <div className='text-primary-emphasis py-md-3 py-1 mainhead'>
                      <div className='text-primary-emphasis  fw-medium  head1 head11'>Choose Your Fresh And</div> 
                      <div className='text-primary-emphasis fw-medium  head1'>Healthy Food</div>                   
                   </div>

                    {/* <p className='text-primary-emphasis opacity-75 heros'><span>&quot;</span>Fast delivery from top-rated foods<span>&quot;</span> or <span>&quot;</span>Your favourite food, just a few clicks away<span>&quot;</span></p> */}
                    <button className='text-white px-sm-4 px-3 py-2   rounded-5 border-0 mt-md-0 mt-3' id='herobutton' style={{backgroundColor:"#93ab01"}}>Order Now</button>
               </div>

               <div className='col-md-6'>
                  <div className='d-flex justify-content-center align-items-center'  style={{height:"350px"}}>
                  <img src={HeroImage} alt="" className='img-fluid heroimg  order-first order-md-last' />
                  </div>
               </div>
           </div>
       </div>
       {/* </div> */}

    </>
  )
}

export default Hero_section