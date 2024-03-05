import axios from 'axios'

const BASE_URL = 'https://motion.propulsion-home.ch/backend/api'

const AxiosUser = axios.create({
    baseURL: BASE_URL
})


export const getMyProfileData = async (token) => {
        return await AxiosUser.get('/users/me/', {headers: {
        Authorization: `Bearer ${token}`
      }})
}





export default AxiosUser