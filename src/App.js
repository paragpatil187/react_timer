import logo from './logo.svg';
import './App.css';
import { StopWatch } from './components/StopWatch';
import { Timer } from './components/Timer';

function App() {
  return (
    <div className="App">
      <StopWatch/>
      <Timer/>
    </div>
  );
}

export default App;
