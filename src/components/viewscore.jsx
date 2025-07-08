import "./viewscore.css";
function Viewscore({setactivestate}){
    return(
        <div className="bodycontainer">
            <div className="container">
            <h1>🗒️🎉</h1>
            <h2>Quiz submitted</h2>
            <div className="btns">
            <button onClick={()=>setactivestate("quiz")}>Take new Quiz</button>
            <button onClick={()=>setactivestate("score")}>View Score</button>
            </div>
            
        </div>

        </div>
        
    )
}
export default Viewscore;