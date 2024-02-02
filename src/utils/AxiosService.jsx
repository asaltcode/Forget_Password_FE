import axios from 'axios'

const AxiosService = axios.create({
    baseURL :'https://forgot-password-ltij.onrender.com',
    headers: {
        "Content-Type": "application/json",
    }
})

AxiosService.interceptors.request.use((config)=>{
    const token = sessionStorage.getItem('token')
    config.headers.Authorization = token?`Bearer ${token}`:null
    if(config.authonticate && token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},(error)=>{
    return Promise.reject(error)
})

export default AxiosService