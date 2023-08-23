import React from 'react'

function Header() {
  return (
    <div>
        <div className='main'>
        <h1>Assignment Task</h1>
        <hr/>
        <p className='user-email'>adityakeshari152@gmail.com <span className='switch-acc'>Switch account</span></p> 
        <p>
        The name and photo associated with your Google account will be recorded when you upload files and submit this form. Your email is not part of your response.
        </p>
        <hr />
        <h4><span>* Indicates required question</span></h4>
      </div>
    </div>
  )
}

export default Header