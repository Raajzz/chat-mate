import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineKey } from "react-icons/ai";
import {
	signInWithEmailAndPassword,
	signOut,
	signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../../firebase-config";
import { FcGoogle } from "react-icons/fc";

// As we aren't using any statevariables local to the componenet, this function is not needed to be here, this can be in some other directory and can be exported

const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(auth, provider);
		console.log(result);
	} catch (error) {
		console.log(error.message);
	}
};

const Login = () => {
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				userEmail,
				userPassword
			);
			console.log(user);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<>
			<Helmet>
				<style>
					{`body{
						background-color: #eeeeee;
					}`}
				</style>
			</Helmet>

			<div className="flex items-center justify-center h-screen child:mb-3">
				{/* logo of the application */}
				{/* input card */}
				<div>
					<div className=" text-center mb-3 text-xl text-violet-600 font-bold">
						Login to chat-mate!
					</div>
					<button
						className="w-96 bg-white h-fit p-3 my-4 text-center rounded-sm"
						onClick={signInWithGoogle}
					>
						Sign in with Google
					</button>
					<div className=" w-96 bg-white h-fit p-3 rounded-sm">
						{/* enter email text field */}
						<div>
							<div>
								<input
									type="email"
									name="userEmail"
									id="userEmail"
									className="text-field"
									value={userEmail}
									placeholder="Enter Your Email"
									onChange={(e) => {
										setUserEmail(e.target.value);
									}}
								/>
							</div>
							<input
								type="password"
								name="userPassword"
								id="userPassword"
								className="text-field"
								value={userPassword}
								placeholder="Enter Your Password"
								onChange={(e) => {
									setUserPassword(e.target.value);
								}}
							/>
							<button
								className=" 
								rounded-md 
								py-2 
								px-3 
								cursor-pointer 
								w-full 
								bg-violet-600 
								text-white 
								hover:bg-violet-300 
								hover:text-violet-800 
								duration-150 
								ease-in-out 
								text-lg"
								onClick={login}
							>
								Login
							</button>
						</div>
					</div>
					<div className="w-96 bg-white h-fit p-3 my-4 text-center rounded-sm">
						Don't have an account?{" "}
						<Link to="/register" className=" text-blue-400 cursor-pointer">
							Register
						</Link>
					</div>
				</div>
				{/* Question for registration card */}
			</div>
		</>
	);
};

export default Login;
