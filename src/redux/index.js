import { combineReducers, createStore } from "redux";

const initailUser = {username: "xm"}

const userReducer = (state = initailUser, action) => {
    switch (action.type) {
        case "LOGIN":
            return action.playload
        case "LOGOUT":
            return {}
        default:
            return state
    }
}

const reducer = combineReducers({
    user: userReducer
})

export const store = createStore(reducer)