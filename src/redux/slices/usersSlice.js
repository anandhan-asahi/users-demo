import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const usersSlice = createSlice({
	name: "users",
	initialState: { users: [] },
	reducers: {
		setUsers: (state, action) => {
			state.users = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUserThunk.fulfilled, (state, action) => {
			console.log("Am in state updating scope", action);
			state.users = action.payload;
		});
		builder.addCase(fetchUserThunk.rejected, (state, action) => {
			state.users = [];
		});
	},
});

export const fetchUserThunk = createAsyncThunk(
	"usersSlice/fetchUsers",
	async () => {
		console.log("Am in thunk scope");
		const response = await axios.get("https://dummyjson.com/users");
		return response.data.users;
	}
);

export default usersSlice;
