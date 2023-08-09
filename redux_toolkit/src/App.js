import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import {  useSelector } from 'react-redux';
import Reward from './components/Reward';
import Admin from './components/Admin';

function App() {

  const {account,bonus} = useSelector(state=>state)
  // console.log(account)

  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount : {account.amount}</h3>
      <h3>Total Bonus : {bonus.bonus}</h3>

      <Account></Account>
      <Bonus></Bonus>
      <Reward />
      <Admin />
    </div>
  );
}

export default App;
