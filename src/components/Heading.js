import { Fragment } from "react";

const Heading = (props) => {
	console.log(props);
	return (
		<Fragment>
			<h1>
				Hey {props.name}, am here...my age is {props.age}
			</h1>
			<button onClick={props.clickHandler}>Click me</button>
		</Fragment>
	);
};

export default Heading;
