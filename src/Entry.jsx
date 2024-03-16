import { useEffect, useState } from "react";
import Hypnosis from "./Hypnosis";
import Footer from "./Footer";

function Entry() {
	const [name, setName] = useState("");
	const [hypnosis, showHypnosis] = useState(false);

	function handleInputChange(event) {
		setName(event.target.value);
	}

	function hypnotis() {
		console.log(name);

		showHypnosis((prevState) => !prevState);
	}
	
	return (
		// <div >
		//     {
		//         !hypnosis && <div className="wapper">
		//             <h1>Black Magic</h1>

		//             <input
		//                 type="text"
		//                 placeholder="Enter Your Name..."
		//                 value={name}
		//                 onChange={handleInputChange}/>
		//             <button onClick={hypnotis}>Enter</button>
		//         </div>
		//     }

		//     {hypnosis && <Hypnosis data={name}/>}
		// </div>

		<div
			className="outer-container"
			// style={{
			// 	backgroundImage: `${
			// 		hypnosis ? "none" : "url('/src/assets/background.jpg')"
			// 	}`,
			// }}
		>
			{!hypnosis && (
				<div className="wrapper">
					<h1>Black Magic</h1>

					<input
						type="text"
						placeholder="Enter Your Name..."
						value={name}
						onChange={handleInputChange}
					/>
					<button onClick={hypnotis}>Enter</button>
				</div>
			)}
			{hypnosis && <Hypnosis data={name} />}

			{!hypnosis && <Footer />}
		</div>
	);
}

export default Entry;
