import React, {useEffect, useState} from 'react';

import HeroListComponent from './HeroList.component';

const HeroListContainer = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.opendota.com/api/heroStats')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return <HeroListComponent isLoading={isLoading} data={data} />;
};

export default HeroListContainer;
