import { FAILURE_USER_DATA, REQUEST_USER_DATA, SET_USER_DATA, SUCCESS_USER_DATA } from "../actions/actionsTypes";

const initialState = {
  data:{},
  loading:false,
  error:''
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER_DATA: {
      return {
        ...state,
        loading:true
      };
    }
    case SUCCESS_USER_DATA:{
      return {
        ...state,
        data:action.payload,
        loading:false
      }
    }
    case FAILURE_USER_DATA:{
      return {
        ...state,
        data:{},
        loading:false,
        error:action.payload
      }
    }
    default:
      return state;
  }
};
export default reducer;
