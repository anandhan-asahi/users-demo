import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import usersSlice, { fetchUserThunk } from "../redux/slices/usersSlice";

const Users = () => {
	const navigate = useNavigate();
	const users = useSelector((state) => state.users.users);
	const dispatch = useDispatch();
	console.log(users, "users state value");

	const fetchUsers = async () => {
		// const response = await axios.get("https://dummyjson.com/users");
		// dispatch(usersSlice.actions.setUsers(response.data.users));
		dispatch(fetchUserThunk());
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return <h1>Users</h1>;
};

export default Users;
