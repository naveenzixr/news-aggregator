import './Home.css';

function Home({setactivestate}){
    return(
        <div className="homecontainer">
            <div className="takequiz">
                <h2>Are you ready?</h2>
                <p>Click on start button</p>
                <h1 id="emoji">👇🏻</h1>
                <button onClick={()=>setactivestate("instruct")} id="homestart">Start</button>
                 
            </div>
        </div>
    )
}
export default Home;