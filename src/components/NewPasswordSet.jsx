import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes';
import { toast } from 'react-toastify';
import '../stylesheet/login.css'
import {UserEmailContext} from '../context/UserEmailComponent'

const NewPasswordSet = () => {
  const navigate = useNavigate()
  let {userEmail} = useContext(UserEmailContext)
 const handlePassword = async (e) =>{
 try {
  e.preventDefault()
  const formData = new FormData(e.target);
  const {confirmPassword, password } = Object.fromEntries(formData); 
  if(password === confirmPassword){
    const data = {email: userEmail, password}
    const res = await AxiosService.post(`${ApiRoutes.PASSWORD_CHANGE.path}`, data, {authenticate: ApiRoutes.PASSWORD_CHANGE.authenticate })
     if(res.status === 200){
      toast.success("password changed")
      navigate('/')
    }
   }else{
    toast.error("Check your confirm password")
   }
 } catch (error) {
  toast.error(error.response.data.message || error.message)        
 }

 }
  return (
    <Container className="mt-5 login-container">
      <Form onSubmit={handlePassword} >
        <h1 className='text-center mb-5'>Change your password</h1>
        <Form.Group controlId="formUsername">
        <p>Sent to this email : <span className='text-primary'>{userEmail}</span></p>
          <Form.Label>New Password</Form.Label>
          <Form.Control type="text" placeholder="New Password" name='password' required/>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" name='confirmPassword' required/>
        </Form.Group>
        <div className='mt-3 d-flex justify-content-around'>
        <Button variant="primary" type="submit" className=''>
          Change
        </Button>
        </div>
      </Form>
    </Container>
  )
}

export default NewPasswordSet