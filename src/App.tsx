import { useEffect } from 'react';

import { getSample } from './apis/getSample';

const App = () => {
  useEffect(() => {
    const fetchSample = async () => {
      try {
        const { data } = await getSample();

        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSample();
  }, []);

  return <div>App</div>;
};

export default App;
