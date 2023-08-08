// import { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { decrementBonus, incrementBonus } from '../slices/bonusSlice';

function Bonus() {
  // const [points, setPoints] = useState({ value: 0 });

  const dispatch = useDispatch()
  
  const { bonus } = useSelector(state=>state)

  // const increment = () => {
  //   setPoints({ value: points.value + 1 });
  // };
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : ${bonus?.bonus}</h3>

        <button onClick={()=>dispatch(incrementBonus())}>Increment +</button>
        <button onClick={()=>dispatch(decrementBonus())}>Decrement +</button>
      </div>
    </div>
  );
}

export default Bonus;
