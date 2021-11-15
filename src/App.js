import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Travel from './Components/Travel';
import Objects from './Components/Objects';
import Reflection from './Components/Reflection.js'
function App() {
  return (
    <div className="App">
      <Header/>
      <Travel/>
      <Objects/>
      <Reflection/>
      
    </div>
  );
}

export default App;
