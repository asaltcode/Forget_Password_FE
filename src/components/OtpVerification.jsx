import React, { useState, useEffect, useCallback, useContext } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes';
import { toast } from 'react-toastify';
import {UserEmailContext} from '../context/UserEmailComponent'

const OtpVerification = () => {
 const {userEmail} = useContext(UserEmailContext)

  const navigate = useNavigate()
  const email = userEmail
    const handleVerifiOtp = async (e) => {
      try {
      e.preventDefault()
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData); 
      const data = {email, otp: formProps.otp}
      const res = await AxiosService.post(`${ApiRoutes.OTP_VERIFY.path}`, data, {
        authenticate: ApiRoutes.OTP_VERIFY.authenticate
      })
      if(res.status === 200){
        navigate('/new-password')
        toast.success(res.data.message)
      }
      } catch (error) {
        toast.error(error.response.data.message || error.message)        
      }
    }


  // OTP expiry timer  
    const [seconds, setSeconds] = useState(59);
    useEffect(() => {
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            // setUserEmail("")
            clearInterval(intervalId);
            // Trigger a callback when the timer reaches zero
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);       
      return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
    }, []);

  return (
    <Container  className="mt-5 login-container">
      <Form onSubmit={handleVerifiOtp} >
        <h1 className='text-center mb-5'>OTP Verify</h1>
        <Form.Group controlId="formUsername">
          <p>Sent to this email : <span className='text-primary'>{userEmail}</span></p>
          <Form.Label>Enter the OTP received in your email</Form.Label>
          <Form.Control type="text" placeholder="Enter your otp" name='otp' required/>
        </Form.Group>
        <div className='mt-3 d-flex justify-content-around'>
        <Button variant="primary" type="submit"  className='bg-primary'>Confirm</Button>
        <p>Time: {seconds}</p>
        </div>
      </Form>
    </Container>
  )
}

export default OtpVerification