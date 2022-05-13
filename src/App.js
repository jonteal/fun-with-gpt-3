import './App.css';
import Prompt from './components/Prompt/Prompt';
import ResponseList from './components/ResponseList/ResponseList';
import { useState, useEffect } from 'react';

function App() {

  const [savedResponses, setSavedResponses] = useState(
    localStorage.getItem('responses')
      ? JSON.parse(localStorage.getItem('responses'))
      : []
  );

  const saveResponse = newResponse => {
    setSavedResponses([newResponse, ...savedResponses]);
  };

  useEffect(() => {
    localStorage.setItem('responses', JSON.stringify(savedResponses));
  }, [savedResponses]);

  return (
    <div className="App">
      <Prompt saveResponse={saveResponse} />
      <ResponseList savedResponses={savedResponses} />
    </div>
  );
}

export default App;
