import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/Homepage";
import Login from "./components/Login";
import Users from "./components/Users";
import UserCarts from "./components/UserCarts";
import User from "./components/User";
import "./App.css";
import { Fragment, createContext, useState } from "react";
import Heading from "./components/Heading";

import { name, age, printMyName } from "./components/constants";
import { Provider } from "react-redux";
import store from "./redux/store";

export const MyContext = createContext();
export const AgeContext = createContext();
export const TextContext = createContext();
export const NewTextContext = createContext();

const App = () => {
	const obj = { name: "Arul" };
	const ageObj = [1, "mmm", [1, 2, { name: "Mahesh" }], 3, 4, 5, 6, 7, 89];
	const [text, setText] = useState("Hy there");
	const [newText, setNewText] = useState("Initial Heading");
	const changeTextHandler = () => {
		setText("Changed!!");
	};
	const changeNewTextHandler = (jgjgj) => {
		setNewText(jgjgj);
	};
	return (
		<Provider store={store}>
			<AgeContext.Provider value={ageObj}>
				<MyContext.Provider value={obj}>
					<TextContext.Provider
						value={{
							text: text,
							changeTextHandler: changeTextHandler,
						}}
					>
						<NewTextContext.Provider
							value={{ newText, changeNewTextHandler }}
						>
							<BrowserRouter>
								<Routes>
									<Route path="/" element={<HomePage />} />
									<Route path="/login" element={<Login />} />
									<Route path="/users" element={<Users />} />
									<Route
										path="/users/:id"
										element={<User />}
									/>
									<Route
										path="/user-carts"
										element={<UserCarts />}
									/>
								</Routes>
							</BrowserRouter>
						</NewTextContext.Provider>
					</TextContext.Provider>
				</MyContext.Provider>
			</AgeContext.Provider>
		</Provider>
	);
};

export default App;
