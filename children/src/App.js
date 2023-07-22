import logo from './logo.svg';
import './App.css';
import Child from './Child';
import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Create an interval to update the time every second
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="App">
      <Child message={time} />
    </div>
  );
}

export default App;
