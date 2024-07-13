import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);
  // let counter = 0;
  const incrementValue = () => {
    // console.log(counter, Math.random());
    // counter++;
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    // setCounter(counter + 1);
  };
  let decrementValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai aur Shivam</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={incrementValue}>Increment Value</button>
      <br />
      <button onClick={decrementValue}>Decrement Value</button>
    </>
  );
}

export default App;
