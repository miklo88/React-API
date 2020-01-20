import React, { useState, useEffect } from "react";

const Hook = () => {
  const [count, setCount] = useState(0);
  // similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    //   update the document title using the browswer API
    document.title = `you clicked ${count} times`;
  }, []);

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Hook;
