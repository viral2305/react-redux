import './App.css';
import Coin from './features/coin/Coin';
import Counter from './features/counter/Counter';
import Theme from './features/theme/Theme';
function App() {
  //without redux we have two option for state manage 
  // 1) is use as props in this we define state in app then we pass props as child component
  //2) use context api
  return (
    <div className="App">
      <Counter />
      <Coin />
      <Theme />
    </div>
  );
}

export default App;
