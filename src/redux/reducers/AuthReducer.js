import * as actions from '../Types'

const initialState = {
  user: [],
  isLoggedIn: false,
  userDetails: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_RIDER:
      return {
        ...state,
        user: [...state.user, action.payload],
        isLoggedIn: true
      }
    case actions.CURRENT_USER:
      console.log("user key in auth reducer: ",action.payload)
      return {
        ...state,
        userDetails: action.payload,
        isLoggedIn: true
      }
    case actions.LOGOUT_USER:
      return {
        ...state,
        user: [],
        userDetails: null,
        isLoggedIn: false,
      }
    default:
      return state;
  }
}