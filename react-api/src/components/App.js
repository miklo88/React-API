import React from "react";
// import all react components here. build router from here?
import RouteNav from "../router/Route-Nav";
import NumberAPI from "../api/NumberAPI-mod";
import Hook from "../axios/index";
import NasaPic from "../nasa/index";

function App() {
  return (
    <div className='Body'>
      <div className='header-wrap'>
        <h1>MIKLO</h1>
        <p>A CRA App with the react hooks and api fixins.</p>
      </div>
      <RouteNav />
      <NumberAPI />
      <Hook />
      <NasaPic />
    </div>
  );
}

export default App;
