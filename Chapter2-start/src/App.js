import './App.css';
import {useSelector} from 'react-redux'
import Account from './components/Account';
import Bonus from './components/Bonus';
function App() {

  const {account,bonus} = useSelector(state=>state)
  console.log(account,bonus)
  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount : {account?.amount}</h3>
      <h3>Total Bonus : {bonus.bonus}</h3>

      <Account></Account>
      <Bonus></Bonus>
    </div>
  );
}

export default App;
