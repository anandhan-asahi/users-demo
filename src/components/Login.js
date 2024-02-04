import axios from "axios";
import { useCallback, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AgeContext, MyContext } from "../App";

const Login = () => {
	const nav = useNavigate();
	const [number, setNumber] = useState(3);
	const [name, setName] = useState("");
	const contextObj = useContext(AgeContext);
	console.log(contextObj, "contextObj");
	const submitHandler = async (e) => {
		e.preventDefault();
		// fetch("https://dummyjson.com/auth/login", {
		//   method: "POST",
		//   headers: { "Content-Type": "application/json" },
		//   body: JSON.stringify({
		//     username: "kminchelle",
		//     password: "0lelplR",
		//     // expiresInMins: 60, // optional
		//   }),
		// })
		//   .then((res) => res.json())
		//   .then((data) => {
		//     if (data.token) {
		//       nav("/users");
		//     }
		//   });
		const response = await axios.post("https://dummyjson.com/auth/login", {
			username: "kminchelle",
			password: "0lelplR",
		});
		if (response.data.token) {
			// console.log("amhere");
			localStorage.setItem("reactDemoToken", response.data.token);
			// const token = sessionStorage.getItem("reactDemoToken");
			// console.log(token);
			nav("/users");
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">
					Email address
				</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<div id="emailHelp" className="form-text">
					We'll never share your email with anyone else.
				</div>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputPassword1" className="form-label">
					Password
				</label>
				<input
					type="password"
					className="form-control"
					id="exampleInputPassword1"
				/>
			</div>
			<div className="mb-3 form-check">
				<input
					type="checkbox"
					className="form-check-input"
					id="exampleCheck1"
				/>
				<label className="form-check-label" htmlFor="exampleCheck1">
					Check me out
				</label>
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};

export default Login;
