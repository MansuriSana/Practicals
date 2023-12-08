import './App.css';
import ScreenSelector from './Components/ScreenSelector';
import { TitlePage } from './Components/TitlePage';

function App() {
  return (
    <div className="App">
      <ScreenSelector><TitlePage/></ScreenSelector>
      
    </div>
  );
}

export default App;
