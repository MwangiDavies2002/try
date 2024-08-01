import React,{ useState } from 'react'
import {loginFields} from "./FormFields"
import Input from './Input';
import FormAction from './FormAction';
import FormExtra  from './FormExtra';

const fields = loginFields;
let fieldState = {};
fields.forEach(field=>fieldState[field.id]='');

const Login = () => {

  const [loginState,setLoginState] = useState(fieldsState);

  const handleChange = (e)=>{
    setLoginState({...loginState,[e.target.id]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    authenticateUser();
  }
  //handle login api integration here

  const authenticateUser =()=>{}

  return (
    <div>
      <form className='mt-8 space-y-6'>
        <div className='-space-y-px'>
          {
            fields.map(field=>
            <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            />)
          }
        </div>
        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Login"/>
      </form>
    </div>
  )
}

export default Login
