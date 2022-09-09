import React, { useState } from 'react'

export default function Footer() {
  var [newsletter,setnewsletter]=useState("")
  function getData(e){
    setnewsletter(e.target.value)
  }
  function postData(){
    alert("Email id"+newsletter)
  }
  return (
    <div className='background text-light text-center mt-2 p-3'>
      <p>copyright@fashionmart.com</p>
      <div className='row'>
        <div className='col-md-3 col-1'></div>
        <div className='col-md-6 col-10'>
          <form onSubmit={postData}>
            <div className="mb-3">
              <input type="email" required className="form-control" name="example" onChange={getData} placeholder='Enter Your Email id to Subscribe our Newsletter Service' />
            </div>
            <button type="submit" className="btn btn-light w-100">Subscribe</button>
          </form>
        </div>
      </div>
      <div className='col-md-3 col-1'></div>
    </div>
  )
}
