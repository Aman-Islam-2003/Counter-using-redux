import "../src/App.css"
import Counter from "./components/Counter";
import { useDispatch } from "react-redux";

function App(){
  const dispatch=useDispatch();
  return(
    <>
    <div className="container">
      <button className="btn inc" onClick={(event)=>{
        dispatch({type:"INCREMENT"})
      }}>Increment</button>
      <h2><Counter></Counter></h2>
      <button className="btn dec" onClick={(event)=>{
        dispatch({type:"DECREMENT"})
      }}>Decrement</button>
    </div>
    </>
  )
}
export default App;