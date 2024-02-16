
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

 const [count, setCount] = useState(0);

  // Define a callback function that increments the count
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Pass the callback function to a child component */}
      <ChildComponent onIncrement={increment} />
    </div>
  );
}

interface ChildProps {
  onIncrement: () => void;
}

const ChildComponent = ({ onIncrement }: ChildProps) => {
  return (
    <button onClick={onIncrement}>
      Increment
    </button>
  );
};

export default App
