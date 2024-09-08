import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";


function App () {

    const [name, setName] = useState("");
    const [predictedAge, setPredictedAge] = useState(0);
    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>setPredictedAge(res.data.age))
    };

    return (
        <div className = "App">
            <input placeholder="Guess the age!" onChange={(event) => {setName(event.target.value)}}></input>
            <button onClick={fetchData}> Search </button>

            <h1>{predictedAge}</h1>
        </div>
    )
}

export default App;