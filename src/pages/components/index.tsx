import React, { useState} from "react";
// component to increment 
function Counter(props: {name: string; counter:number }) {
    // Use useState to manage the order state
    const [counter, setCounter] = useState(0);
  
  
    // Function to handle the click  & incmt the counter
    const handleCounterPlus = () => {
        setCounter( counter + 1);
        // negativeCounter(negcounter => negcounter - 1);
    };
  
    const handleCounterMinus = () => {
      setCounter( counter - 1);
      // need a new function to handle the second button
  };
  // function order(props: any) {
    return (
      <div style={{backgroundColor:"white"}}>
      <h1 style={{color:"green"}}> Counter Example </h1>
      {/* <h1>{props.name}</h1> */}
      <h1>Counter: {counter}</h1>
      <button style={{backgroundColor:"green"}}onClick={handleCounterPlus}>Increment</button>
      <button style={{backgroundColor:"red"}} onClick={handleCounterMinus}>Decrement</button>
      </div>
    );
  } 

  export default Counter;
  


