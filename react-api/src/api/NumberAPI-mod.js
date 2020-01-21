import React from "react";
import { useFetch } from "./index";

export default function NumberAPI() {
  // calling useFetch api hook.
  const { data, loading } = useFetch("http://numbersapi.com/random/date");

  return (
    <div className='NumberAPI-container'>{loading ? "loading..." : data}</div>
  );
}
