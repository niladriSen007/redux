import axios from "axios";

export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const INCREMENT_USER_BALANCE_BY_FETCH = "incrementuserbalancebyfetch";
export const INCREMENT_BY_PAYLOAD = "incrementByPayload";
export const DECREMENT_BY_PAYLOAD = "decrementByPayload";
export const INCREMENT_BONUS = "incrementbonus";
export const DECREMENT_BONUS = "decrementbonus";



export const fetchUser = async () => {
    const { data } = await axios.get(`http://localhost:8000/accounts/1`);
    return data.amount;
  };
  
  const fetchUserBySpecificId = async (id) => {
    const { data } = await axios.get(`http://localhost:8000/accounts/${id}`);
    return data.amount;
  };



//Action Filters
//Accounts
export const increment = () => ({
    type: INCREMENT,
  });
 export const incrementByPayload = (payload) => ({
    type: INCREMENT_BY_PAYLOAD,
    payload: payload,
  });
// export const incrementuserbalancebyfetch = async (dispatch, getState) => {
//     const user_amount = await fetchUserBySpecificId(2);
//     dispatch({
//       type: INCREMENT_USER_BALANCE_BY_FETCH,
//       payload: user_amount,
//     });
//   };
export const incrementuserbalancebyfetch = async (dispatch) => {
  console.log("In Fetch")
    const user_amount = await fetchUserBySpecificId(2);
    dispatch({
      type: INCREMENT_USER_BALANCE_BY_FETCH,
      payload: user_amount,
    });
  };
  const decrement = () => ({
    type: DECREMENT,
  });
  const decrementByPayload = () => ({
    type: DECREMENT_BY_PAYLOAD,
    payload: 4,
  });
  


  
  //Bonus
export  const incrementBonus = (payload) => ({
    type: INCREMENT_BONUS,
    payload:payload,
  });