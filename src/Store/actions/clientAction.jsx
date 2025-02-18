import api from "../../api"
import md5 from "md5"

export const setUser = (user) => ({ type: "SET_USER", payload: user })
export const setRoles = (roles) => ({ type: "SET_ROLES", payload: roles })
export const setTheme = (theme) => ({ type: "SET_THEME", payload: theme })
export const setLanguage = (language) => ({ type: "SET_LANGUAGE", payload: language })

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await api.post("/login", credentials)
    const user = response.data.user
    user.avatarUrl = `https://www.gravatar.com/avatar/${md5(user.email.toLowerCase().trim())}?d=mp`
    dispatch(setUser(user))
    if (credentials.rememberMe) {
      localStorage.setItem("token", response.data.token)
    }
    return response.data
  } catch (error) {
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

