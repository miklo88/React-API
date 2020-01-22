import React, { useState, useEffect } from "react";
// image container

export default function NasaPic() {
  const [nasaData, setData] = useState({});
  //   beginning of setting up nasa api photo state.
  const [showModal, setModal] = useState(false);

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

  return (
    <div>
      <p>{nasaData.title}</p>
      {/* work aqui to debug photo not rendering. started building for it above line 7. */}
      <img src={nasaData.hdurl} alt='' />
      <p>
        {nasaData.copyright} | {nasaData.date}
      </p>
    </div>
  );
}
