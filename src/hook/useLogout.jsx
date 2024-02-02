import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useLogout = () => {
    const navigate = useNavigate()
  return ()=>{
      toast.error("Logout successfully!")
      sessionStorage.clear()
      navigate('/login')
  }
}
