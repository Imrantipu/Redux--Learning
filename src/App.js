
import { useReducer, useState } from 'react';
function App() {
  // normal state handle
  const [count, setCount] = useState(0);
  // from submission
  const submit = (event) =>{
    event.preventDefault();
  }
//  useReducer 
const initialState = 0;
const reducer = (state, action) =>{
 if(action.type === "INCREMENT"){
  return state +1;
 } else if(action.type === "DECREMENT"){
  return state -1;
 }
}
const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      {/* normal states access*/}
      <button onclick = {() => setCount(count -1)}></button>
      <button onclick = {() => setCount((prvState) => prvState +1)}></button>
      {/* From submission of a single value*/}
      <form onclick = {submit}>
      <input type="text" name="name" onBlur={(e) => setCount(e.target.value)}></input>
      </form>
      {/* useReducer actions */}
      <button onclick ={() => dispatch({ type: "DECREMENT"})}>Decrement</button>
    </div>
  );
}

export default App;
