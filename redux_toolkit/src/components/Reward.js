import { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { incrementBonus, decrementBonus } from '../slices/bonusSlice';
import { ADD_REWARD, ADD_REWARD_PAYLOAD } from '../reducers/rewardReducer';

function Reward() {
  const [points, setPoints] = useState({ value: 0 });

  const dispatch = useDispatch()
  
  const { reward } = useSelector(state=>state)

  console.log(reward)

  // const increment = () => {
  //   setPoints({ value: points.value + 1 });
  // };
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Reward Component</b>
        </h4>
        <h3>Total Point : ${reward?.rewards}</h3>

        <button onClick={()=>dispatch(ADD_REWARD())}>Add Reward +</button>
        <button onClick={()=>dispatch(ADD_REWARD_PAYLOAD(32))}>Add Reward payload +</button>
        <button onClick={()=>dispatch(decrementBonus())}>Decrement +</button>
      </div>
    </div>
  );
}

export default Reward;
