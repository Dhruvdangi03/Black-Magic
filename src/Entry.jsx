import { useState } from "react";
import Hypnosis from "./Hypnosis";

function Entry(){
    const [name, setName] = useState("");
    const [hypnosis, showHypnosis] = useState(false);


    function handleInputChange(event){
        setName(event.target.value);
    }

    function hypnotis(){
        console.log(name);

        showHypnosis((prevState) => !prevState);
    }   

    return(
        <div >
            {
                !hypnosis && <div className="wapper">
                    <h1>Black Magic</h1>
                    
                    <input 
                        type="text"
                        placeholder="Enter Your Name..."
                        value={name}
                        onChange={handleInputChange}/>
                    <button onClick={hypnotis}>Enter</button>
                </div>
            }

            {hypnosis && <Hypnosis data={name}/>}
        </div>
    );
}

export default Entry;