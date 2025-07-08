import "./instruction.css";
function Instruct({setactivestate}){

    return(
<div className="insbody">
        <div className="inscontainer">
            <h1>BrainStrom</h1>
            <ul>
                <li>
                    This quiz contains 10 general knowledge questions.
                </li>
                <li>Each question containes four options.</li>
                <li>10 seconds time limit for Each question. If you fail to answer within the time limit it marked as skiped. </li>
                <li>Quiz will be automatically submitted after the time limit.</li>

            </ul>
            <button onClick={()=>setactivestate("quiz")}>Start</button>
        </div>

    </div>
    )
    
}
export default Instruct;