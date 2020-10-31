import './app.scss';
import { InputRenderer } from './components/input-renderer/InputRenderer';

function App() {
  return (
    <div className="app">
      Total Calorie Calculator
      <div className="input-container">
        <InputRenderer />
      </div>
    </div>
  );
}

export default App;
