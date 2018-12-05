import React from "react";

const Details = props => {
  return (
    <div className="details">
      <h1>hi</h1>
      //
      <pre><code>{JSON.stringify(props, null, 4)}</code></pre>
      {" "}
      to look at the params passed in by the route
    </div>
  );
};

export default Details;
