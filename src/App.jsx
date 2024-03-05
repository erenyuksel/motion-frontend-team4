import { useDispatch} from 'react-redux'
import './App.scss'
import Router from './routes'
import { useEffect, useState } from 'react'
import AxiosUser, { getMyProfileData } from './axios/UserAxios'
import { userLogin, userLogout, userObject } from './store/UserSlice'
import Spinner from './components/Spinner'

function App() {

  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    
    const verify = async () => {
      setIsLoading(true)
      try {
        await AxiosUser.post('/auth/token/verify/', { token: token })
        dispatch(userLogin(token))
        const user = await getMyProfileData(token)
        dispatch(userObject(user.data))
      } catch (error) {
        window.localStorage.removeItem('token')
        dispatch(userLogout())
      } finally {
        setIsLoading(false)
      }
    }
    token ? verify() : dispatch(userLogout())
  }, [])


  if (!isLoading) {
    return (
      <>
        <Router />
      </>
    )
  } else {
    return (
      <>
        <Spinner />
      </>
    )
  }
}

export default App
