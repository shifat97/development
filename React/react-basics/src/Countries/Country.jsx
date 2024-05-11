import { useState } from 'react';
import './Country.css';

const Country = ({ country, handleBookmark }) => {
  const { flags, name, population, area } = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    visited ? setVisited(false) : setVisited(true);
  }

  return (
    <div className="country-card">
      <img height={200} width={400} src={flags.png} alt={name.common} />
      <h3>{name.common}</h3>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <button className={`${visited ? 'green' : 'red'} `} onClick={handleVisited}>
        {visited ? 'Visited' : 'Not Visited'}
      </button>
      <button onClick={() => handleBookmark(name.common)} className='btn-bookmark'>Bookmark</button>
    </div>
  );
};

export default Country;