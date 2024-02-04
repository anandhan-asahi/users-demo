import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  console.log(params);
  return <h1>Am user {params.id}</h1>;
};
export default User;
