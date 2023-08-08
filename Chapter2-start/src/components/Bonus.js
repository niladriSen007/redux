import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementBonus } from '../actions';

function Bonus() {
  const [bonus, setBonus] = useState({ points: 0 });


  const dispatch = useDispatch()
  const { bonus : bonusVal} = useSelector(state=>state)

  const increment = () => {
    dispatch(incrementBonus(60))
  };
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : ${bonusVal.bonus}</h3>

        <button onClick={increment}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;
