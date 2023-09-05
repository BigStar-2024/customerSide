import { combineReducers } from "redux";
import authReducer from "./authReducer";
import menuReducer from "./menuReducer";
import foodReducer from "./foodReducer";



const rootReducer = combineReducers({
    auth: authReducer,
    food: foodReducer,
    menu: menuReducer,
    // admin: subAdminReducer,
    // staff: staffReducer,
    // requests: requestReducer,
    // stats: statsReducer,
    // checkoutQuestion: checkoutQuestionReducer,
});
export default rootReducer;
