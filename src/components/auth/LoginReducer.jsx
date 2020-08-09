import {
    SUCCESS_LOGIN,
    ERROR_LOGIN,
    GET_USER,
    LOGOUT
} from '../../constants'

export default (state, action) => {
    switch(action.type) {
        case ERROR_LOGIN:
            return {
                ...state,
                message: action.message? action.message : 'Error a iniciar sesión',
                error: true
            }
        case SUCCESS_LOGIN: 
            return {
                ...state,
                authenticated: true,
                error: false
            }
        case GET_USER:
            return {
                ...state,
                userLogged: action.user
            }
        default:
            return state
    }
}