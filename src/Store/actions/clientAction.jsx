import api from "../../components/axios"


export const setUser = (user) => ({ type: "SET_USER", payload: user })
export const setRoles = (roles) => ({ type: "SET_ROLES", payload: roles })
export const setTheme = (theme) => ({ type: "SET_THEME", payload: theme })
export const setLanguage = (language) => ({ type: "SET_LANGUAGE", payload: language })

// Function to set token in axios headers
const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = token;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export const verifyToken = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found');
      return { success: false };
    }

    console.log('Setting token in headers:', token);
    // Set token in axios headers
    setAuthToken(token);

    // Verify token
    console.log('Making verify request');
    const response = await api.get('/verify');
    console.log('Verify response:', response);

    if (response.data) {
      console.log('Token verified, setting user');
      const user = response.data
      // Only try to set avatar if email exists
      if (user.email) {
        user.avatarUrl = `https://www.gravatar.com/avatar/${(user.email.toLowerCase().trim())}?d=mp`
      }
      dispatch(setUser(user));
      return { success: true, data: response.data };
    }

    console.log('Token verification failed, cleaning up');
    // If verification fails, clean up
    localStorage.removeItem('token');
    setAuthToken(null);
    dispatch(setUser(null));
    return { success: false };
  } catch (error) {
    console.error('Token verification error:', error);
    localStorage.removeItem('token');
    setAuthToken(null);
    dispatch(setUser(null));
    return { success: false, error: error.message };
  }
};

export const loginUser = (credentials) => async (dispatch) => {
  try {
    console.log('Sending login request with:', credentials);
    const response = await api.post("/login", credentials)
    console.log('Raw API response:', response);
    
    if (response.data) {
      const user = response.data
      // Only try to set avatar if email exists
      if (user.email) {
        user.avatarUrl = `https://www.gravatar.com/avatar/${(user.email.toLowerCase().trim())}?d=mp`
      }
      // Set token in axios headers
      if (response.data.token) {
        setAuthToken(response.data.token);
        if (credentials.rememberMe) {
          localStorage.setItem("token", response.data.token);
        }
      }

      dispatch(setUser(user));
      return { success: true, data: response.data };
    }
    return { success: false, message: 'Invalid response from server' };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: error.message };
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
   
    localStorage.removeItem('token');
    setAuthToken(null);

    dispatch(setUser(null));
    return { success: true };
  } catch (error) {
    console.error("Error during logout:", error);
    return { success: false, error: error.message };
  }
};

export const fetchRoles = () => async (dispatch) => {
  try {
    const response = await api.get("/roles");
    dispatch(setRoles(response.data));
  } catch (error) {
    console.error("Error fetching roles:", error);
  }
};
