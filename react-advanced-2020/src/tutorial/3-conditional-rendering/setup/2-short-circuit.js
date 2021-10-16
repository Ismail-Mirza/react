import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const [text, setText] = useState("g");

	const firstValue = text || "hello world";
	const secondValue = text && "hello world";

	return (
		<>
			{/* <h1>{firstValue}</h1>
			<h1>value: {secondValue}</h1> */}
			<h1>{text || "john Doe"}</h1>
			<h1>{text && "Hello world!"}</h1>
		</>
	);
};

export default ShortCircuit;
