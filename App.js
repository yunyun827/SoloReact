import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";


function App () {
    const [excuse, setExcuse] = useState("");

    const fetchExcuse = (category) =>{
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then((res)=>setExcuse(res.data[0].excuse));
    }
    
    return (
        <div className = "App">
           <button onClick={() => fetchExcuse("party")}> Party </button>
           <button onClick={()=> fetchExcuse("family")}>Family</button>
           <button onClick={()=> fetchExcuse("office")}>Office</button>

            <p>{excuse}</p>
        </div>
    )
}

export default App;