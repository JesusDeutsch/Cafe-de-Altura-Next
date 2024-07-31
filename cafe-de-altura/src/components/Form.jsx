"use client"
import { useState } from "react";

function Form() {

	const [user, setUser] = useState({});

	const handleInput = (event) => {
		const inputName = event.target.name;
		setUser(prev => {
			return {
			...prev,
			[inputName]: event.target.value
			}
		});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(user);
		// user: { 
		//        	 name="...",
		//	         email="...",
		//	         age="..."
		//        }
	}
  
	return (
		<form onSubmit={handleSubmit}>
			<label>Enter your name:</label>
			<input type="text" name="name" value={user.name} onChange={handleInput} />
	
			<label>Enter your email:</label>
			<input type="text" name="email" value={user.email} onChange={handleInput} />
	
			<label>Enter your age:</label>
			<input type="text" name="age" value={user.age} onChange={handleInput} />
	
			<input type="submit" />
		</form>
	);
}

export default Form;