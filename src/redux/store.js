import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import usersSlice from "./slices/usersSlice";

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		users: usersSlice.reducer,
	},
});

export default store;
