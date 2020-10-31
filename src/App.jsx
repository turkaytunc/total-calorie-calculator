import './app.scss';
import { InputRenderer } from './components/input-renderer/InputRenderer';

function App() {
  return (
    <div className="app">
      <header>Total Calorie Calculator</header>
      <InputRenderer />
    </div>
  );
}

export default App;
