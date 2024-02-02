import React from 'react'

const ApiRoutes = {
  LOG_IN :{
    path: "/user/login",
    authenticate: false    
  },
  SIGN_UP :{
    path: "/user",
    authenticate: false
  },
  GET_USER :{
    path: "/user",
    authenticate: true
  },
  FORGOT_PASSWORD :{
    path: "/user/forgot",
    authenticate: false
  },
  OTP_VERIFY :{
    path: "/user/verify-otp",
    authenticate: false
  },
  PASSWORD_CHANGE :{
    path: "/user/change-password",
    authenticate: false
  },
}
export default ApiRoutes