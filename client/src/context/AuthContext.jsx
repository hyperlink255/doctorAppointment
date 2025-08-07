import { createContext, useContext, useEffect, useReducer } from "react"
const intialState = {
    user: localStorage.getItem("user") !== undefined ? JSON.parse(localStorage.getItem("user")) : null,
    role: localStorage.getItem("role") || null,
    token: localStorage.getItem("token") || null
}

export const authContenxt = createContext(intialState)

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_STATRT":
            return {
                ...state,
                user: null,
                role: null,
                token: null
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload.user,
                token: action.payload.token,
                role: action.payload.role
            }

            case "LOGOUT":
                return {
                    ...state,
                    user: null,
                    role: null,
                    token: null
                };
        default:
            return state
    
    }
}


export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, intialState)

    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(state.user))
        localStorage.setItem("token",state.token)
        localStorage.setItem("role",state.role)
      },[state])

    return (
        <authContenxt.Provider value={{user:state.user,token:state.token,role:state.role, dispatch }}>
            {children}
        </authContenxt.Provider>
    )
}

