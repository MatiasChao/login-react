import React, { Fragment, useState, useReducer } from 'react'
import axios from 'axios'
import {
    SUCCESS_LOGIN,
    ERROR_LOGIN,
    GET_USER,
    LOGOUT
} from '../../constants'
import LoginReducer from './LoginReducer'
import './Login.scss'


const Login = (props) => {

    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        userLogged: null,
        message: null,
        error: false
    }

    const [state, dispatch] = useReducer(LoginReducer, initialState)

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const getUserLogged = async (token) => {
        const userInfo = await axios.get('http://localhost:4000/api/users', {
            headers: {
                'x-auth-token': token
            }
        })
        if(userInfo) {
            dispatch({type: GET_USER, user: userInfo.data.user})
        }

        props.history.push({
            pathname: '/home',
            state: { data: userInfo.data.user }
        })
    }

    const login = async e => {
        e.preventDefault()

        if(email.trim() === '' || password.trim() === '') {
            dispatch({ type: ERROR_LOGIN, message: 'El email y/o password no pueden ser vacios' })
            return
        }

        try {
            const result = 
                await axios.post('http://localhost:4000/api/auth', user)
            if(result) {
                localStorage.setItem("token-myapp", result.data.token)
                dispatch({ type: SUCCESS_LOGIN })
                getUserLogged(result.data.token)
            }
        } catch (error) {
            dispatch({ type: ERROR_LOGIN })
        }
    
    }

    return (
        <Fragment>
            <div className="container d-flex justify-content-center" style={{backgroundColor: '#6A62D2'}}>
                <div className="form-container mt-5 mb-5 p-3 text-center">
                    <h5 className="m-2 mb-3"> SIGN IN TO YOUR ACCOUNT </h5>

                    <form onSubmit={login}>
                        <div className="mb-2">
                            <input type="text" placeholder="email" className="p-2"
                                value = { email } name = "email" style={{backgroundColor: '#E5E8ED', border: 'none', width: '90%' }}
                                onChange = { e => onChange(e) } />
                        </div>

                        <div className="">
                            <input type="password" placeholder="password" className="p-2"
                                value = { password } name = "password" style={{backgroundColor: '#E5E8ED', border: 'none', width: '90%' }}
                                onChange = { e => onChange(e) }  />
                        </div>

                        <div>
                            <input type="submit" className="mt-4 p-2" value="SIGN IN" style={{ backgroundColor: '#6A62D2', border: 'none', color: '#fff', width: '90%' }}/>
                        </div>

                        {
                            state.error && 
                            <div className="mt-2" style={{color: 'red'}}>
                                <p>{state.message}</p>
                            </div>
                        }
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login