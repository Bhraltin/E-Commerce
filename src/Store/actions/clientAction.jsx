import api from "../../components/axios"
import md5 from "md5"

export const setUser = (user) => ({ type: "SET_USER", payload: user })
export const setRoles = (roles) => ({ type: "SET_ROLES", payload: roles })
export const setTheme = (theme) => ({ type: "SET_THEME", payload: theme })
export const setLanguage = (language) => ({ type: "SET_LANGUAGE", payload: language })

export const loginUser = (credentials) => async (dispatch) => {
  try {
    console.log('Sending login request with:', credentials);
    const response = await api.post("/login", credentials)
    console.log('Raw API response:', response);
    
    // Check if we have a valid response
    if (response.data) {
      const user = response.data
      // Only try to set avatar if email exists
      if (user.email) {
        user.avatarUrl = `https://www.gravatar.com/avatar/${md5(user.email.toLowerCase().trim())}?d=mp`
      }
      dispatch(setUser(user))
      if (credentials.rememberMe) {
        localStorage.setItem("token", response.data.token)
      }
      return { success: true, data: response.data };
    }
    return { success: false, message: 'Invalid response from server' };
  } catch (error) {
    console.error("Login error:", error)
    return { success: false, message: error.message };
  }
}

export const logoutUser = () => async (dispatch) => {
  try {
    // Clear user data from Redux store
    dispatch(setUser(null))
    // Remove token from localStorage
    localStorage.removeItem("token")
    return true
  } catch (error) {
    console.error("Error during logout:", error)
    throw error
  }
}

export const fetchRoles = () => async (dispatch) => {
  try {
    const response = await api.get("/roles")
    dispatch(setRoles(response.data))
  } catch (error) {
    console.error("Error fetching roles:", error)
  }
}
