import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <>
    
    <div className="container-fluid" id="contact">
        <div className="row">

            <div className="col-sm-6">
            <div style={{width: "100%"}}>
                <iframe width="100%" height="520" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=silaiman+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a>
                </iframe>
            </div>
            </div>

            <div className="col-sm-6 pt-md-5 pt-sm-3 pt-3">
                <div className='d-flex flex-column align-items-center'>
                    <h5 className='text-primary-emphasis fw-medium'>LEAVE A REPLY</h5>
                    <p className='text-primary-emphasis' style={{fontSize:"12px"}}>Your email address will not be published. Required fields are marked *</p>
                </div>

                <form action="" className='ps-sm-0 ps-0'>
                    <div class="row mb-md-4 d-flex justify-content-center ">

                    <input type="text" required
                    className='place pt-2 rounded-5 border-black border-opacity-25 col-lg-5 col-md-4 col-sm-9  mb-md-0 mb-sm-2 mb-3 col-8  pb-2 ' placeholder='Your Name *' />
                    <input type="email"     required   className='place pt-2 rounded-5 border-black border-opacity-25 col-lg-5 col-md-4 col-sm-9 col-8 mb-md-0 mb-sm-2 mb-3 pb-2 ms-md-2'placeholder='Your Email *' />

                    </div>
                    
                    <div class="row mb-md-4 d-flex justify-content-center">
                    <input type="text"       required className='place pt-2 rounded-5 border-black border-opacity-25  pb-2 col-md-4 col-lg-5 col-sm-9 col-8 mb-md-0 mb-3 mb-sm-2'placeholder='Subject *' />
                    <input type="tel"         className='place pt-2 rounded-5 border-black border-opacity-25  pb-2 col-md-4 col-lg-5 col-8 col-sm-9  ms-md-2 mb-md-0 mb-3 mb-sm-2'placeholder='Phone ' />
                    </div>

                    <div className='row d-flex justify-content-center'>
                    <textarea rows="5" placeholder='Message' className='place pt-2 rounded-4 
                    border-2 border-black border-opacity-25 col-lg-10 col-md-8 col-sm-9 col-8 mb-sm-0 mb-3'>
                    </textarea>
                    </div>

                    <div className='text-center mt-md-3 mt-sm-2 mb-sm-0 mb-3'>
                    <label className=' text-primary-emphasis check-container' style={{fontSize:"14px"}}>
                    <input type="checkbox" required /> Kindly check The details and submit</label>
                    </div>
                     
                     <div className='text-center mt-md-3 mt-sm-2 mb-md-0 mb-3'>
                     <button className='contactbuttons text-white px-4 py-2 rounded-5 border-0' style={{backgroundColor:"#93ab01",fontSize:"11px",fontWeight:"600"}}>SEND MESSAGE</button>
                     </div>
                </form>
            </div>

        </div>
    </div>
     
    </>
  )
}

export default Contact