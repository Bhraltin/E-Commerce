import axios from "axios"

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
})

// Check for token on initial load
const token = localStorage.getItem('token')
if (token) {
  api.defaults.headers.common['Authorization'] = token
}

export default api;