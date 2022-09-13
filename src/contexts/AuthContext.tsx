import React, { createContext, useCallback, useEffect, useState } from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { Alert } from 'react-native'

type AuthContextProps = {
  user: FirebaseAuthTypes.User 
  loading: boolean
  isUser: boolean
  handleSignInWithEmailAndPassword: (email: string, password: string) => Promise<void>
  handleCreateUserWithEmailAndPassword: (email: string, password: string) => Promise<void>
  handleForgetPassword: (email: string) => Promise<void>
}

type AuthContextProviderProps = {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthContextProvider = ({children}: AuthContextProviderProps) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)
  const [isUser, setIsUser] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSignInWithEmailAndPassword =  useCallback( async (email: string, password: string) => {
    try{
      setLoading(true)
      const response = await auth().signInWithEmailAndPassword(email, password)
      if(response.user) {
        setUser({
          ...user
        })
      }
    }catch(e){
      console.log(e)
    }finally{
      setLoading(false)
    }
  }, [])

  const handleCreateUserWithEmailAndPassword= useCallback( async (email: string, password: string) => {
    try{
      setLoading(true)
      const response = await auth().createUserWithEmailAndPassword(email, password)
      if(response.user) {
        Alert.alert('Sucesso', 'Usuário criado com sucesso!')
      }
    }catch(e){
      console.log(e)
    }finally{
      setLoading(false)
    }
  }, [])

  const handleForgetPassword = useCallback( async(email: string) => {
    try{
      setLoading(true)
      await auth().sendPasswordResetEmail(email).then(() => {
        Alert.alert("Redefinir senha", "Enviamos um e-mail para você!")
      })
      
    }catch(e){
      console.log(e)
    }finally{
      setLoading(false)
    }
  }, [])


  useEffect(() => {
    setIsUser(true)
    const unsubscribe = auth().onAuthStateChanged(setUser)

    setIsUser(false)
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider 
      value={{ 
        user,
        loading,
        isUser,
        handleSignInWithEmailAndPassword,
        handleCreateUserWithEmailAndPassword,
        handleForgetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}