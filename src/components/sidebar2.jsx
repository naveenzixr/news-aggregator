import { useState } from "react";
import Home from "./Home";
import Instruct from "./instruction";
import Question from "./oldquiz";
import Score from "./score";
import Viewscore from "./viewscore";

function Sidebar2() {
  const [isOpen, setopen] = useState(false);
  const [activestate, setactivestate] = useState("Home");
  const [score,setscore] = useState(0);

  function handleclick() {
    setopen(!isOpen);
  }

  return (
    <div className="sidebarcontainer">
     

      <div className="homecontainer2">
        <div className="navbar">
          <h1>Brainstorm</h1>
        </div>
        <div className="content">
           <div className="sidecontainer">
        <div className="sidenav">
          <div className="sidenavbuttonstop">
            <button onClick={handleclick} className="menu">☰</button>

            <i className="fa-solid fa-clock-rotate-left"></i> 
            <i className="fa-solid fa-ranking-star"></i> 
            <i className="fa-solid fa-pen-to-square"></i> 
          </div>

          <div className="sidenavbuttonsbottom">
            <i className="fa-solid fa-user"></i>
            <i className="fas fa-cog"></i> 
          </div>
        </div>

        {isOpen && (
          <div className="togglebar">
            <div className="topul">
              <ul>
                <li onClick={() => {setactivestate("Home"); setopen(!isOpen)}}>Home</li>
                <li onClick={() => setactivestate("quizhistory")}>Quiz History</li>
                <li onClick={() => setactivestate("leaderboard")}>Leaderboard</li>
                <li onClick={() => setactivestate("quiz")}>New Quiz</li>
              </ul>
            </div>
            <div className="botul">
              <ul>
                <li onClick={() => setactivestate("account")}>Account</li>
                <li onClick={() => setactivestate("settings")}>Settings</li>
              </ul>
            </div>
          </div>
        )}
      </div>

          <div className="states">
        {activestate === "Home" && <Home  setactivestate={setactivestate} />}
        {activestate === "quiz" && <Question setactivestate={setactivestate} setscore={setscore}/>}
        {activestate==="instruct"&&<Instruct setactivestate={setactivestate}/>}
        {activestate==="viewscore"&&<Viewscore setactivestate={setactivestate}/>}
        {activestate==="score"&& <Score setactivestate={setactivestate} score={score}/>}

          </div>
        </div>

        {/* Add other components here as needed */}
      </div>
    </div>
  );
}

export default Sidebar2;
