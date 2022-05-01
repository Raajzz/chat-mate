import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase-config";
import { signOut, onAuthStateChanged } from "firebase/auth";

const App = () => {
	const logout = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			console.log(error);
		}
	};

	const [user, setUser] = useState("");

	onAuthStateChanged(auth, (currentUser) => {
		console.log("current user", currentUser);
		setUser(currentUser);
	});

	return (
		<>
			{/* Login + Register Wrapper */}
			<div className=" text-center">
				<button className=" m-5 text-white py-1 bg-violet-600 hover:bg-violet-400 hover:text-violet-800 px-6 rounded-lg duration-150 ease-in-out">
					<Link to="/login">Login</Link>
				</button>

				<button className=" m-5 text-white py-1 bg-orange-600 hover:bg-orange-400 hover:text-orange-800 px-6 rounded-lg duration-150 ease-in-out">
					<Link to="/register">Register</Link>
				</button>

				<button className=" m-5 text-white py-1 bg-orange-600 hover:bg-orange-400 hover:text-orange-800 px-6 rounded-lg duration-150 ease-in-out">
					<button onClick={logout}>Logout</button>
				</button>
				{/* Null checking: If the user is full get the email otherwise don't do anything. */}
				<div>{user?.displayName}</div>
				<div>{user?.email}</div>
				<img src={user?.photoURL} alt={user?.displayName} />
			</div>
		</>
	);
};

export default App;
