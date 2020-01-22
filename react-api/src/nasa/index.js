import React, { useState, useEffect } from "react";
// image container

export default function NasaPic() {
  const [nasaData, setData] = useState({});

  async function fetchData() {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
    );
    const data = await res.json();
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // render() {
  return (
    <div>
      <p>{nasaData.title}</p>
      <img src={nasaData.hdurl} alt='' />
      <p>
        {nasaData.copyright} | {nasaData.date}
      </p>
    </div>
  );
  // }
}
