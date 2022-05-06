import './App.css';
import FunctionalComponent from './components/functional';
import ClassComponent from './components/class';

function App() {
  return (
    <div className="App">
      <FunctionalComponent userName="Roopam Joshi"/>
      <ClassComponent userName="Roopam Joshi"/>
    </div>
  );
}

export default App;
