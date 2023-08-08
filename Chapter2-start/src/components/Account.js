import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementByPayload, incrementuserbalancebyfetch } from '../actions';
  
function Account() {
  const [account, setAccount] = useState({ amount: 0 });
  const [value, setValue] = useState(0);

  const dispatch = useDispatch()
  const { account : accountVal} = useSelector(state=>state)

  console.log(accountVal.amount)

  const incrementAccountAmount = () => {
    dispatch(increment())
  };

  const decrement = () => {
    setAccount({ amount: account.amount - 1 });
  };

  // const incrementByAmount = (value) => {
  //   setAccount({ amount: account.amount + value });
  // };

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount:${accountVal?.amount}</h3>
        <button onClick={incrementAccountAmount}>Increment +</button>
        <button onClick={()=>dispatch(incrementuserbalancebyfetch(dispatch))}>Fetch user </button>
        <button onClick={decrement}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(Number.parseInt(e.target.value))}></input>
        <button onClick={() => dispatch(incrementByPayload(value))}>
          Increment By {value} +
        </button>
      </div>
    </div>
  );
}

export default Account;
