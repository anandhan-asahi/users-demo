import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState: { value: 0 },
	reducers: {
		increment: (state, action) => {
			console.log(action, "am here to increment");
			state.value = state.value + 1; //state.value++
		},
		decrement: (state, action) => {
			console.log("am here to decrement");
			state.value = state.value - 1;
		},
		incrementBy: (state, action) => {
			console.log(action, "am here to incrementBy");
			state.value = state.value + action.payload;
		},
	},
});

export default counterSlice;
