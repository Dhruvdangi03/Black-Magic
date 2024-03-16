import React from "react";
import './hypnosis.css';
function Hypnosis(props) {
	return (
		<div className="container">
			<h1>Now you are under my control {props.data}!</h1>
		</div>
	);
}

export default Hypnosis;
