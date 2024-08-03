import React from 'react'
import Header from './Header';
import Login from './Login';


const LoginPages = () => {
  return (
    <div>
    <h2>Hello World</h2>
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
