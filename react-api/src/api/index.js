import { useEffect, useState } from "react";

// passing the url from our other file to return data.
export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState({ data: null, loading: true });
    fetch(url)
      .then(x => x.text())
      .then(y => {
        setState({ data: y, loading: false });
      });
  }, [url]);

  return state;
};
