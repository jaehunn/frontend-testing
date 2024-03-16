import { useEffect, useState } from "react";

import { getSample } from "../apis/getSample";

const App = () => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchSample = async () => {
      try {
        const { data } = await getSample();

        if (!data) {
          throw new Error();
        }

        setIsError(false);
      } catch (err) {
        console.error(err);

        setIsError(true);
      }
    };

    fetchSample();
  }, []);

  if (isError) throw new Error();

  return <div>App</div>;
};

export default App;
