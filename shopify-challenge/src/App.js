import './App.css';
import Prompt from './components/Prompt/Prompt';
import ResponseCard from './components/ResponseCard/ResponseCard';
import Responses from './components/Responses/Responses';

function App() {
  return (
    <div className="App">
      <Prompt /> 
      {/* <Responses /> */}
      <ResponseCard />
    </div>
  );
}

export default App;
