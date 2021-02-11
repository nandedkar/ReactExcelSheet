import React from "react";
import { Link, Route } from "react-router-dom";
import Employee from "./Employee";
const Users = ({ match }) => {
  {
    console.log(match.url);
  }
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/David`}>David</Link>
        </li>
        <li>
          <Link to={`${match.url}/Steve`}>Steve</Link>
        </li>
        <li>
          <Link to={`${match.url}/John`}>John</Link>
        </li>
      </ul>
      <Route
        path={`${match.path}/:name`}
        render={({ match }) => (
          <div>
            <h3> {match.params.name} </h3>
            <Employee name={match.params.name} />
          </div>
        )}
      />
    </div>
  );
};
export default Users;
