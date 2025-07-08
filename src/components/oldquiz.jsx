import { useEffect, useState } from "react";
import "./oldquiz.css";
import Questioncard2 from "./questioncard2";
function Question({setactivestate,setscore}) {
  const [data, setData] = useState([]);
  const [rotatingData, setRotatingData] = useState([]);
  const [dipQuestion, setDip] = useState("");
  const [index, setIndex] = useState(0);
  

  useEffect(() => {
    async function getMeals() {
      const res = await fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple");
      const redata = await res.json();
      setData(redata.results);
      console.log(redata.results)
      setRotatingData([...redata.results]);
      setDip(rotatingData[0]);
      setscore(0);
    }

    getMeals();
  }, []);

  useEffect(()=>{
    if(rotatingData.length>0){
        setDip(rotatingData[index])
    }
  },[index,rotatingData])
  

  function next(){
    if (index < rotatingData.length - 1) {
      setIndex(prev => prev + 1);
    }
    
  }
  function prev(){
   if (index > 0) {
      setIndex(prev => prev - 1);
    }
    
  }

  return (
    <div className="boxcontainer">
      {dipQuestion ? <Questioncard2 ques={dipQuestion} ind={index}  setscore={setscore} /> : <p>Loading...</p>}


    {dipQuestion?(<div className="btns">

        {index<rotatingData.length-1&& <button id="nxt" onClick={next} disabled={index>rotatingData.length-1}>Next</button>}
       
        
       
        <button id="submit" onClick={()=>setactivestate("viewscore")}>Submit</button>
        

      </div>):""}
      

      
    </div>
  );
}

export default Question;
