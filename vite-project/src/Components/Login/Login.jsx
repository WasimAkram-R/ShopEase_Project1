// import React, { useState } from 'react'
// import './Login.css'
// {/* Login Here */}
// import { LiaUserLockSolid } from "react-icons/lia";
// import { FaRegUser } from "react-icons/fa";
// import { IoKeyOutline } from "react-icons/io5";
// import { IoIosArrowRoundForward } from "react-icons/io";


//  {/* Sign Up*/}
//  import { GoLock } from "react-icons/go";
//  import { AiOutlineMail } from "react-icons/ai";

// const Login = () => {

// //  const [login,setLogin]=useState(null)

// //  function loginclick(){
// //      setLogin((e)=>e.display=="block")
// //  }

//   return (
//     <>
    
     
//      <div className="container" id='login' >
//         <div className="row justify-content-center
//          column-gap-lg-5 column-gap-md-5  my-5">
         
//         {/* Login Here */}

//          <div className="col-md-5 col-12 bg-body-tertiary p-4 mb-md-0 mb-5">

//            <div className='d-flex'>
               
//                <div className='d-flex align-items-center'>
//                <LiaUserLockSolid className='me-4' style={{width:"30px",height:"30px",color:"#171f52" }}/>
//                </div>
                 
//                <div>
//                <h6 className='text-primary-emphasis fs-5'>Login Here</h6>
               
//                <p style={{fontSize:"13px"}}>Your personal data will be used to support your experience throughout this website, to manage access to your account.

//                </p>
//                </div>
              
//            </div>

//            <div className='input-container mb-3'>  <FaRegUser className='icon' />
//               <input type="text" className='w-100 p-3 logininput rounded-3'
//               placeholder='Username / email address' />
//            </div>

//            <div className='input-container'>
//             <IoKeyOutline className='icon' />
//            <input type="password"className='rounded-3 w-100
//            p-3 logininput'
//               placeholder='Password' />
//            </div>
             

//            <div className='d-flex justify-content-between my-3'>
//               <label><input type="checkbox"/> Remember me</label>
//               <h6>Forget Password</h6>
//            </div>

//            <div>
//              <button className='rounded-3 loginbuttons text-white border-0 p-3 w-100'>Login Now <IoIosArrowRoundForward style={{width:"30px",height:"30px",color:"white" }}/></button>
//            </div>

//          </div>



//           {/* Sign Up*/}

//           <div className=" col-md-5 col-12 bg-body-tertiary p-4">

//   <div className='d-flex'>
    
//     <div className='d-flex align-items-center'>
//     <GoLock className='me-4' style={{width:"30px",height:"30px",color:"#171f52" }}/>
//     </div>
      
//     <div>
//     <h6 className='text-primary-emphasis fs-5'>Sign Up</h6>
//     <p style={{fontSize:"13px"}}>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
//     </div>
   
// </div>

// <div className='input-container'>
//     <FaRegUser className='icon'/>
//    <input type="text"className='w-100 p-3 signupinput rounded-3'
//    placeholder='User name' />
// </div>


// <div className='input-container my-3'>
//     <AiOutlineMail className='icon'/>
//    <input type="email" className='w-100 p-3 signupinput rounded-3 '
//    placeholder='Email address' />
// </div>

// <div className='input-container'>
//     <IoKeyOutline className='icon'/>
//    <input type="password" className='w-100 p-3 signupinput rounded-3'
//    placeholder='Password' />
// </div>


// <div>
//    <p className='py-3'>Already Have Account?</p>
// </div>

// <div>
//   <button className='rounded-3 signupbuttons text-white border-0 p-3 w-100'>Register Now <IoIosArrowRoundForward style={{width:"30px",height:"30px",color:"white" }}/></button>
// </div>

//           </div>



//         </div>
//      </div>
    
//     </>
//   )
// }

// export default Login

















////
import React from 'react'
import './Login.css'
{/* Login Here */}
import { LiaUserLockSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";


 {/* Sign Up*/}
 import { GoLock } from "react-icons/go";
 import { AiOutlineMail } from "react-icons/ai";


 //login modal
 import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Login = () => {



  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  
  return (
    <>
    
     
     {/* <div className="container" id='login' > */}
       
     {/* </div> */}
     
      <>
        {/* <Button  className="me-2 mb-2" onClick={() => handleShow(true)}>
          Full screen
        </Button> */}
        <FaRegUser onClick={() => handleShow(true)}/> 
      </>

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton className='bg-body-tertiary'>
        </Modal.Header>
        <Modal.Body>

    
        <div className="row justify-content-center
         column-gap-lg-5 column-gap-md-5  my-5">
         
        {/* Login Here */}

         <div className="col-md-5 col-10 bg-body-tertiary p-4 mb-md-0 mb-5">

           <div className='d-flex'>
               
               <div className='d-flex align-items-center'>
               <LiaUserLockSolid className='me-4' style={{width:"30px",height:"30px",color:"#171f52" }}/>
               </div>
                 
               <div>
               <h6 className='text-primary-emphasis fs-5'>Login Here</h6>
               
               <p style={{fontSize:"13px"}}>Your personal data will be used to support your experience throughout this website, to manage access to your account.

               </p>
               </div>
              
           </div>

           <div className='input-container mb-3'>  <FaRegUser className='icon' />
              <input type="text" className='w-100 p-3 logininput rounded-3'
              placeholder='Username / email address' required />
           </div>

           <div className='input-container'>
            <IoKeyOutline className='icon'  />
           <input type="password"className='rounded-3 w-100
           p-3 logininput'
              placeholder='Password' required />
           </div>
             

           <div className='d-flex justify-content-between my-3'>
              <label><input type="checkbox"/> Remember me</label>
              <h6>Forget Password</h6>
           </div>

           <div>
             <button className='rounded-3 loginbuttons text-white border-0 p-3 w-100'>Login Now <IoIosArrowRoundForward style={{width:"30px",height:"30px",color:"white" }}/></button>
           </div>

         </div>



          {/* Sign Up*/}

          <div className=" col-md-5 col-10 bg-body-tertiary p-4">

             <div className='d-flex'>
    
            <div className='d-flex align-items-center'>
    <GoLock className='me-4' style={{width:"30px",height:"30px",color:"#171f52" }}/>
      </div>
      
    <div>
    <h6 className='text-primary-emphasis fs-5'>Sign Up</h6>
    <p style={{fontSize:"13px"}}>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
    </div>
   
</div>

<div className='input-container'>
    <FaRegUser className='icon'/>
   <input type="text"className='w-100 p-3 signupinput rounded-3'
   placeholder='User name'  required/>
</div>


         <div className='input-container my-3'>
    <AiOutlineMail className='icon'/>
   <input type="email" className='w-100 p-3 signupinput rounded-3 '
   placeholder='Email address' required/>
         </div>

        <div className='input-container'>
    <IoKeyOutline className='icon'/>
   <input type="password" className='w-100 p-3 signupinput rounded-3'
   placeholder='Password' required/>
        </div>


        <div>
   <p className='py-3'>Already Have Account?</p>
        </div>

        <div>
  <button className='rounded-3 signupbuttons text-white border-0 p-3 w-100'>Register Now <IoIosArrowRoundForward style={{width:"30px",height:"30px",color:"white" }}/></button>
        </div>

          </div>



        </div> 


        </Modal.Body>
      </Modal>

    </>
  )
}

export default Login