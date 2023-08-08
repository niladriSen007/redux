import { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { decrementAmount, fetchUserById, incrementAmount, incrementAmountByValue } from '../slices/accountSlice';
  
function Account() {
  const [account, setAccount] = useState({ amount: 0 });
  const [value, setValue] = useState(0);

  const dispatch = useDispatch()
  const { account : acc } = useSelector(state=>state)
  // console.log(acc)


  const incrementUserDeposit = () =>{
    dispatch(incrementAmountByValue(value))
    setValue(0)
  }


  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount:${acc.amount}</h3>
        <button onClick={()=>dispatch(incrementAmount())}>Increment +</button>
        <button onClick={()=>dispatch(decrementAmount())}>Decrement -</button>
        <button onClick={()=>dispatch(fetchUserById(1))}>Fetch User Account </button>
        <input type="text" name='value' value={value} onChange={(e) => setValue(+e.target.value)}></input>
        <button onClick={incrementUserDeposit}> 
          Increment By {value} +
         </button>
      </div>
    </div>
  );
}

export default Account;
