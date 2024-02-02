import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes';
import { toast } from 'react-toastify';
import '../stylesheet/login.css'
import {UserEmailContext} from '../context/UserEmailComponent'

const ForgotPassword = () => {
  let {userEmail, setUserEmail} = useContext(UserEmailContext)

  const navigate = useNavigate()
  const [Otp , setOtp] = useState()
  const handleForgotPassword = async (e)=>{
   try {
    e.preventDefault()
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData); 
    
    const res = await AxiosService.post(`${ApiRoutes.FORGOT_PASSWORD.path}`, formProps, {
      authenticate: ApiRoutes.FORGOT_PASSWORD.authenticate
    })
    if(res.status === 200){
      setOtp(res.data.OTP)
      navigate(`/otp-verification`)
      setUserEmail(formProps.email)
      toast.success("mail send successfully")
    }else{
    }   
   } catch (error) {
    toast.error(error.response.data.message || error.message)   
   }
  }


  return (
    <Container  className="mt-5 login-container">
      <Form onSubmit={handleForgotPassword} >
        <h1 className='text-center mb-5'>Forgot Password Email</h1>
        <Form.Group controlId="formUsername">
          <Form.Label>Enter your forgot password email :</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" name='email' required/>
        </Form.Group>
        <div className='mt-3 d-flex justify-content-center'>
        <Button variant="primary" type="submit" className='bg-success'>Send mail</Button>
        </div>
      </Form>
    </Container>
  )
}

export default ForgotPassword