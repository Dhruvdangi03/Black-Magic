import React from 'react';

function Hypnosis(props){
    console.log("chal raha hai");

    return(
        <div className="container">
            <h1>{props.data}</h1>
        </div>
    );
}   

export default Hypnosis;