import { useState } from "react";

const UserCart = (props) => {
  const [name, setName] = useState(props.name);
  let age = props.age;
  let loc = props.loc;
  const clickHandler = () => {
    setName("New name");
  };

  return (
    <div className="user-cart">
      <div className="user-cart-child">{`Hi, am ${name}`}</div>
      <div className="user-cart-child">{`My age is ${age}`}</div>
      <div className="user-cart-child">{`Am from ${loc}`}</div>
      <button onClick={() => clickHandler()}>Click me!</button>
    </div>
  );
};

export default UserCart;
