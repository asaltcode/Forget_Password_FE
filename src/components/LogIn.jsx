import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes';
import { toast } from 'react-toastify';
import '../stylesheet/login.css'


const LogIn =  () => {
  const navigate = useNavigate()
const handleLogin = async (e)=>{
    try {
    e.preventDefault()
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData); 
    const res = await AxiosService.post(`${ApiRoutes.LOG_IN.path}`, formProps, {
      authenticate: ApiRoutes.LOG_IN.authenticate
    })
    if(res.status === 200){
      toast.success(res.data.message)
      sessionStorage.setItem('token', res.data.token)
      sessionStorage.setItem('role', res.data.role)
      
      if(res.data.role === 'admin'){
        navigate('admin')
      }
      else if(res.data.role === 'user'){
        navigate('/user')
      }
    }
   
    } catch (error) {
      toast.error(error.response.data.message || error.message)   
    }


}

  return (
    <Container className="mt-5 login-container">
      <Form onSubmit={handleLogin}>
        <h1 className='text-center mb-5'>Log in</h1>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter your username" name='email' required/>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" name='password' required/>
        </Form.Group>

        <div className='mt-3 d-flex justify-content-around'>
        <Button variant="primary" type="submit" className=''>
          Login
        </Button>
        <a onClick={()=>navigate('/forgot-password')} style={{cursor:"pointer"}} target="_blank" className='text-primary pe-auto' rel="noopener noreferrer">Forgot Password</a>
        </div>
      </Form>
    </Container>
  );
   
}

export default LogIn