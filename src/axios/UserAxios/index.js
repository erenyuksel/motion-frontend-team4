import axios from 'axios'

const BASE_URL = 'https://motion.propulsion-home.ch/backend/api'

const AxiosUser = axios.create({
    baseURL: BASE_URL
})

export default AxiosUser