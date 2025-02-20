
import md5 from "md5"
import api from "../../components/axios"

export const setUser = (user) => ({ type: "SET_USER", payload: user })
export const setRoles = (roles) => ({ type: "SET_ROLES", payload: roles })
export const setTheme = (theme) => ({ type: "SET_THEME", payload: theme })
export const setLanguage = (language) => ({ type: "SET_LANGUAGE", payload: language })

export const loginUser = (credentials) => async (dispatch) => {
  try {
    console.log("Attempting to log in with:", credentials.email)
    const response = await api.post("/login", credentials)
    console.log("Full API Response:", JSON.stringify(response.data, null, 2))

    if (!response.data) {
      throw new Error("No data received from the server")
    }

    const { token, name, email, role_id } = response.data

    if (!email) {
      throw new Error("User email not found in the response")
    }

    const user = {
      name,
      email,
      role_id,
      avatarUrl: `https://www.gravatar.com/avatar/${md5(email.toLowerCase().trim())}?d=mp`,
    }

    dispatch(setUser(user))

    if (credentials.rememberMe && token) {
      localStorage.setItem("token", token)
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }

    return user
  } catch (error) {
    console.error("Login error:", error)
    if (error.response) {
      console.error("Error response:", error.response.data)
      console.error("Error status:", error.response.status)
      console.error("Error headers:", error.response.headers)
    } else if (error.request) {
      console.error("Error request:", error.request)
    } else {
      console.error("Error message:", error.message)
    }
    throw error
  }
}

