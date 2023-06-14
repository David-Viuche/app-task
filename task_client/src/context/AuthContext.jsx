import { createContext, useContext, useState } from 'react'
import { registerRequest } from '../api/auth'

export const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticate, setIsAuthenticate] = useState(false)
  const [errors, setErrors] = useState([])
  const signup = async (user) => {
    try {
      const res = await registerRequest(user)
      console.log(res.data)
      setUser(res.data)
      setIsAuthenticate(true)
    } catch (error) {
      setUser(null)
      setIsAuthenticate(false)
      console.log(error.response.data)
      setErrors(error.response.data)
    }
  }

  return (
    <AuthContext.Provider value={{
      signup,
      user,
      isAuthenticate,
      errors
    }}>
      {children}
    </AuthContext.Provider>
  )
}
