import React from "react";
// import all react components here. build router from here?
// import RouteNav from "./"
import NumberAPI from "./api/NumberAPI-mod";
import Hook from "./axios/index";
// import { useFetch } from "./api/index";

function App() {
  // calling useFetch api hook.
  // const { data, loading } = useFetch("http://numbersapi.com/random/date");

  return (
    <div className='Body'>
      <div className='header-wrap'>
        <h1>MIKLO</h1>
        <p>A CRA App with the axios fixins.</p>
      </div>
      {/* <RouteNav /> */}
      <NumberAPI />
      <Hook />

      {/* <div>{loading ? "loading..." : data}</div> */}
    </div>
  );
}

export default App;
