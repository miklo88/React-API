import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// Redirect - the last one.

// import routes or compoennts
import { Home } from "../components/home";
import { Numbers } from "../components/numbers";
import { Count } from "../components/count";

export default function RouteNav() {
  return (
    <BrowserRouter>
      <div>
        <Link className='btn-link' to='/'>
          Home
        </Link>
        <Link className='btn-link' to='/numbers'>
          Random Facts
        </Link>
        <Link className='btn-link' to='/count'>
          Counting Hook
        </Link>
      </div>

      <Switch>
        <Route expact path='/home' compoent={Home} />
        <Route path='/numbers' compoent={Numbers} />
        <Route path='/count' compoent={Count} />
      </Switch>
    </BrowserRouter>
  );
}
