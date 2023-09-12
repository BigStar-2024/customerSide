import UserInfo from "../../types/redux/Auth"

const userInfo: UserInfo = {
    userName: "",
    userBirth: "",
    userEmail: "",
    userGender: "",
    userPassword: ""
}

const authReducer = (state = userInfo, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_NEW_USER':
            return {
                ...state,
                user: payload,
                authError: ''
            };
        case "ADD_NEW_USER_LOADER":
            return {
                ...state,
                addUserLoader: payload,
            }
        // case 'PERMISSIONS':
        //     return {
        //         ...state,
        //         userPermissions: action.payload
        //     }
        // case 'LOGIN_FAIL':
        //     localStorage.clear()
        //     return {
        //         ...state,
        //         uid: '',
        //         authError: action.error.message
        //     }
        // case 'LOGOUT_SUCCESS':
        //     return {
        //         ...state,
        //         authError: '',
        //         uid: '',
        //         registered: false,
        //         user: null
        //     }
        // case 'LOGIN_REQUEST':
        //     return {
        //         ...state,
        //         loading: true
        //     }
        // case 'LOGIN_REQUEST_END':
        //     return {
        //         ...state,
        //         loading: false
        //     }
        // case 'FORGET_LOADER':
        //     return {
        //         ...state,
        //         forgetLoading: action.payload
        //     }

        default:
            return {
                ...state
            }
    }
}
export default authReducer
