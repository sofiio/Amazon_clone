import React from 'react'
import './Login.css';

function Login() {
  return (
    <>
    <div className='login_img'>
    <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
    </div>
    <div className='login_form'>
    
      <form>    
                
                <strong><h2>Sign In</h2></strong>
                <label htmlFor="uname"><h5>Email or mobile phone number</h5></label>
                <input  className='login_input'   type="text" id="uname" name="uname" required /><br/>
                <button className='login_button'>Continue</button>
                <div className='login_privacy'>
                <h6>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</h6>
                </div>
    </form>
    </div>

    
     <div className='login_register'>
        <h5>New to Amazon?</h5>
        <button className='login_Create_Account'>Create your Amazon account</button>
        <div className='login_Amazon_rules'>
        <h6>© 1996-2022, Amazon.com, Inc. or its affiliates</h6>
        </div>
    </div>
    </>
  )
}

export default Login