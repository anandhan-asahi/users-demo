import { Fragment, useContext } from "react";
import { NewTextContext, TextContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import counterSlice from "../redux/slices/counterSlice";

const HomePage = (props) => {
	const { newText, changeNewTextHandler } = useContext(NewTextContext);
	const counterValue = useSelector((state) => {
		return state.counter.value;
	});
	// const counterValue = useSelector(state =>  state.counter.value);
	const dispatch = useDispatch();
	const incrementHandler = () => {
		dispatch(counterSlice.actions.increment());
	};
	const decrementHandler = () => {
		dispatch(counterSlice.actions.decrement());
	};
	const incrementByHandler = () => {
		dispatch(counterSlice.actions.incrementBy(10));
	};

	return (
		<Fragment>
			<h1>Counter value : {counterValue}</h1>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={decrementHandler}>Decrement</button>
				<button onClick={incrementByHandler}>Increment By</button>
			</div>
		</Fragment>
	);
};

export default HomePage;
