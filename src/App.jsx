import './App.css';
import useSound from 'use-sound';

function App() {
  const [playSound] = useSound('../../Sounds/buzz.mp3');
  return (
    <div className="App">
      <header className="App-header">
        <button className="buzzer" onClick={playSound}>BUZZ</button>
      </header>.
    </div>
  );
}

export default App;
