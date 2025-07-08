import { useEffect, useState } from "react";

function Questioncard({ ques ,ind}) {
  const [options, setOptions] = useState(["", "", "", ""]);
  const[selected,setselect] = useState(null);

  const handleclick = (option) => {
    setselect(option); // track what was clicked
  };

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
  }, [ques]);

  return (
    <div className="qcontainer">
      <div className="questionp">
        <p>{ind+1}. {ques.question}</p>
        
      </div>
      <div className="options">
        {options.map((option, index) => (
          <div className="option" key={index}  onClick={()=>handleclick(option)}
          style={{
                backgroundColor:
                  selected === option
                    ? option === ques.correct_answer
                      ? "green"
                      : "red"
                    : "",
                cursor: "pointer",
              }}>
            <p>{index+1}. {option}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questioncard;
