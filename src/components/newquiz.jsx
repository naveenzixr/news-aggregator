import { useEffect, useState } from "react";
import "./newquiz.css";

function Newquiz(){
    const [ques,setques] = useState("");
    const [data,setdata] = useState([]);
    const [showanswer,setanswer] = useState(false);
    const [opt,selectedopt] = useState("");
    useEffect(()=>{
        async function Getq(){
            let res = await fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple");
            res = await res.json();
            console.log(res.results);
            setdata(res.results);
            setques(res.results[0]);
            console.log(res.results[0]);


        }
        Getq();
    },[])

    function handleclick(ans){
        if(showanswer){
            return;
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
    return(

        <div className="container">
            

             {ques ? (
        <>
          <h2 dangerouslySetInnerHTML={{ __html: ques.question }}></h2>
          {ques.incorrect_answers.map((ans, idx) => (
            <div onClick={()=>handleclick(ans)} className={getclass(ans)} ><p key={idx}>{ans}</p></div>
          ))}
          <div onClick={()=>handleclick(ques.correct_answer)} className={getclass(ques.correct_answer)}><p>{ques.correct_answer}</p></div>
        </>
      ) : (
        <p>Loading...</p>
      )}
            
            
                
        </div>
        
    )
}
export default Newquiz;