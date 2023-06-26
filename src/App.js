import logo from './logo.svg';
import './App.css';
import {Typewriter} from 'react-simple-typewriter'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Typewriter
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                words={['Site is under Construction']}
                            />
      </header>
    </div>
  );
}

export default App;
