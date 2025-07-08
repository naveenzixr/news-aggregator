import { useEffect, useState } from "react";
import Questioncard from "./question";
function Question() {
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
    }

    getMeals();
  }, []);

  
  useEffect(() => {
    if (rotatingData.length === 0) return;

    setDip(rotatingData[0]);

    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex < rotatingData.length) {
          setDip(rotatingData[nextIndex]);
          return nextIndex;
        } else {
          clearInterval(intervalId);
          return prevIndex;
        }
      });
    }, 10000);

    return () => clearInterval(intervalId);
  }, [data]);

  return (
    <div>
      {dipQuestion ? <Questioncard ques={dipQuestion} ind={index} /> : <p>Loading...</p>}



      <div className="btns">
        <button id="prev">Previous</button>
        <button id="nxt">Next</button>
        

      </div>

      
    </div>
  );
}

export default Question;
