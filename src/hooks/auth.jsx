import {createContext, useContext, useState, useEffect} from 'react'

import {api} from '../services/api'

const AuthContext = createContext({})

function AuthProvider({children}){
    const [data, setData] = useState({})

    async function signIn({email, password}){
        try{
            const response = await api.post('/sessions', {email, password})
            const {user, token} = response.data

            localStorage.setItem('@animenotes:user', JSON.stringify(user))
            localStorage.setItem('@animenotes:token', token)

            api.defaults.headers.common['authorization'] = `Bearer ${token}`

        } catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível logar")
            }
        }
    }

    function signOut(){
        localStorage.removeItem('@animenotes:user')
        localStorage.removeItem('@animenotes:token')

        setData({})
    }

    useEffect(() => {
        const token = localStorage.getItem('@animenotes:token')
        const user = localStorage.getItem('@animenotes:user')

        if(token && user){
            api.defaults.headers.common['authorization'] = `Bearer ${token}`

            setData({
                token,
                user:JSON.parse(user)
            })
        }
    },[])

    return(
        <AuthContext.Provider value={{signIn, user: data.user, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth } 