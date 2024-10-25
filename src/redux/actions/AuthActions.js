import * as actions from '../Types'

export const addRider = (num) => {
  console.log("auth action:: ", num)
  return {
    type: actions.ADD_RIDER,
    payload: num
  }
}

export const loginUser =  (userDetail) => {
  console.log("userkey on login:",userDetail)
  return (async (dispatch) => {
    try {
      dispatch({
        type:  actions.CURRENT_USER,
        payload: userDetail
      })
    }
    catch (error) {
      console.log("error::",error)
    }
  })
}

export const logoutUser  = () => {
  return {
    type: actions.LOGOUT_USER,
  }
}

