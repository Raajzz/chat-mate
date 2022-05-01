import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

const Register = () => {
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showToast, setShowToast] = useState(false);

	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
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
					<div className=" text-center mb-3 text-xl text-orange-600 font-bold">
						Register for chat-mate!
					</div>
					<div className=" w-96 bg-white h-fit p-3 rounded-sm">
						{/* enter email text field */}
						<div>
							<input
								type="text"
								name="userName"
								id="userName"
								className="text-field"
								value={userName}
								placeholder="Enter Your Name"
								onChange={(e) => {
									setUserName(e.target.value);
								}}
							/>
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
							<input
								type="password"
								name="confirmPassword"
								id="confirmPassword"
								className={`text-field ${
									confirmPassword.length === 0
										? "bg-white"
										: userPassword === confirmPassword
										? "bg-green-100 focus:bg-green-100"
										: "bg-red-100 focus:bg-red-100"
								}`}
								value={confirmPassword}
								placeholder="Enter Your Password Again"
								onChange={(e) => {
									setConfirmPassword(e.target.value);
								}}
							/>
							<button
								className=" 
							rounded-md 
							py-2 
							px-3 
							cursor-pointer 
							w-full 
							bg-orange-600 
							text-white 
							hover:bg-orange-300 
							hover:text-orange-800 
							duration-150 
							ease-in-out 
							text-lg"
								onClick={register}
							>
								Register
							</button>
						</div>
					</div>
					<div className="w-96 bg-white h-fit p-3 my-4 text-center rounded-sm">
						Already a user?{" "}
						<Link to="/login" className=" text-blue-400 cursor-pointer">
							Login
						</Link>
					</div>
				</div>
				{/* Question for registration card */}
			</div>
		</>
	);
};

export default Register;
