import "./viewscore.css";
function Score({setactivestate,score}){
    return(
        <div className="bodycontainer">
            <div className="container">
            <div className="scor">
                <h1>{score}/10</h1>
            </div>
            <div className="btns">
            <button onClick={()=>setactivestate("quiz")}>Take new Quiz</button>
            <button onClick={()=>setactivestate("Home")}>Go to Home</button>
            </div>
            
        </div>

        </div>
        
    )
}
export default Score;