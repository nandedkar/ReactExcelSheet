import React, { useContext } from "react";
import UserContext from './data_context';
const Child = () => {
  const temp = useContext(UserContext);
return <h1>Child component {temp}</h1>;
};

export default Child;