import { useSelector } from "react-redux";
function Counter(){
    const count=useSelector(state=>state)
    return(
        <>
        <h2>{count }</h2>
        </>
    )
}

export default Counter;