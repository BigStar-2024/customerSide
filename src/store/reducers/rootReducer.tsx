import { combineReducers } from "redux";
// import authReducer from "./authReducer";
import menuReducer from "./menuReducer";
import foodReducer from "./foodReducer";
import addCart from "./cartReducer";
import authReducer from "./authReducer";



const rootReducer = combineReducers({
    auth: authReducer,
    food: foodReducer,
    menu: menuReducer,
    cart: addCart,
    // admin: subAdminReducer,
    // staff: staffReducer,
    // requests: requestReducer,
    // stats: statsReducer,
    // checkoutQuestion: checkoutQuestionReducer,
});
export default rootReducer;
