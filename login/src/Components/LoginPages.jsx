import React from 'react'
import Header from './Header';
import Login from './Login';


const LoginPages = () => {
  return (
    <div>
    <Header
      heading='Login to your account'      
      paragraph="Don't have an account yet"
      linkName="Signup"
      linkUrl='/signup'
      />
      <Login/>
    </div>
  )
}

export default LoginPages
