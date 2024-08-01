import React from 'react'
import Header from './Header'
import Signup from './Signup'

const SignupPage = () => {
  return (
    <div>
      <Header
        heading="Signup to create Account"
        paragraph="Already have an account?"
        linkName="Login"
        linkUrl='/'
      />
      <Signup/>
    </div>
  )
}

export default SignupPage
