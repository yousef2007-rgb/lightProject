import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Light from './Components/Light';
import Objects from './Components/Objects';
import Reflection from './Components/Reflection.js'
import Colors from './Components/Colors.js'
import Footer from './Components/Footer.js'
function App() {
  return (
    <div className="App">
      <Header/>
      <Light/>
      <Colors/>
      <Objects/>
      <Reflection/>
      <Footer/>
    </div>
  );
}

export default App;
