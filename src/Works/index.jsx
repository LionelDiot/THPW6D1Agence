import React from "react";
import { Link } from "react-router-dom";

export default function Works()  {
  return (
    <div>
      <h1>Welcome Work :</h1>
      <h2>Please select a category !</h2>
      <div>
      <Link to="/works/exercices">Exercices</Link>
      <Link to="/works/concretcases">Case studies</Link>
      <Link to="/works/casestudies">Concret cases</Link>
      </div>
    </div>
  )
}