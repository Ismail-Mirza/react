import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { act } from "react-dom/test-utils";
// reducer function
import { reducer } from "./reducer";
const defaultState = {
	people: [],
	isModalOpen: false,
	modalContent: "Hello world",
};
const Index = () => {
	const [name, setName] = useState("");
	const [state, dispatch] = useReducer(reducer, defaultState);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (name) {
			const newItem = { id: new Date().getTime().toString(), name };
			dispatch({ type: "ADD_ITEM", payload: newItem });
			setName("");
		} else {
			dispatch({ type: "NO_VALUE" });
		}
	};
	const closeModal = () => {
		dispatch({ type: "CLOSE_MODAL" });
	};
	return (
		<>
			{state.isModalOpen && (
				<Modal closeModal={closeModal} modalContent={state.modalContent} />
			)}
			<form onSubmit={handleSubmit} className="form">
				<div>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<button className="btn" type="submit">
					Add
				</button>
			</form>
			{state.people.map((person) => {
				const { id, name } = person;
				return (
					<div className="item" key={id}>
						<h4>{name}</h4>
						<button
							onClick={() => dispatch({ type: "REMOVE_ITEM", payload: id })}
						>
							Remove
						</button>
					</div>
				);
			})}
		</>
	);
};

export default Index;
