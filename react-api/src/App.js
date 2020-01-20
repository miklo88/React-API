import React from "react";
// import all react components here. build router from here?
import Hook from "./axios/index";
import API from "./api";

function App() {
  return (
    <div className='Body'>
      <div className='header-wrap'>
        <h1>MIKLO</h1>
        <p>A CRA App with the axios fixins.</p>
      </div>
      <Hook />
      <API />
    </div>
  );
}

export default App;
