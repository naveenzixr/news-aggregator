import { useEffect, useState } from "react";
import "./newquiz.css";

function Questioncard2({ ques ,ind,setscore}) {
  const [options, setOptions] = useState(["", "", "", ""]);
  
  const [showanswer,setanswer] = useState(false);
    const [opt,selectedopt] = useState("");

  

  useEffect(() => {
    if (!ques) return;

    const incorrect = [...ques.incorrect_answers];
    const i = Math.floor(Math.random() * 4);
    if(i===3){
        incorrect[3]=ques.correct_answer;
    }
    else{
         const swap = incorrect[i];
    incorrect[i] = ques.correct_answer;
    incorrect[3] = swap;
    }
   

    setOptions(incorrect);
    setanswer(false);
  selectedopt("");
  }, [ques]);

  function handleclick(ans){
        if(showanswer){
            return;
        }
        if(ans===ques.correct_answer){
          setscore((score)=>{
            return score+1;
          })
        }
        selectedopt(ans);
        
        
        setanswer(true);
    }
    function getclass(ans) {
  if (!showanswer) return "option45";

  if (ans === ques.correct_answer) return "green";
  if (ans === opt) return "red";
  return "option45";
}

  return (
    <div className="qcontainer">
        
      <div className="questionp">
        <p>{ind+1}. {ques.question}</p>
        
      </div>
      <div className="options">
        {options.map((option, index) => (
          <div className={getclass(option)} key={index}  onClick={()=>handleclick(option)}
          >
            <p>{index+1}. {option}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questioncard2;
