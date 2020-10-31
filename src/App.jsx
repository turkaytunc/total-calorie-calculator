import './app.scss';
import { InputRenderer } from './components/input-renderer/InputRenderer';

function App() {
  return (
    <div className="app">
      Total Calorie Calculator
      <InputRenderer />
    </div>
  );
}

export default App;
