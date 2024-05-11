import { useEffect, useState } from 'react';
import Country from './Country';
import './Countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
  }, []);

  const handleBookmark = country => {
    // Handle duplicate country
    const checkDuplicateCountry = bookmark.find(cname => cname === country);

    if (checkDuplicateCountry) {
      alert(`${country} already in the list.`);
      return;
    }

    country = [...bookmark, country];
    setBookmark(country)
  }

  // Handle remove bookmark
  const handleRemoveBookmark = country => {
    const newBookmarks = bookmark.filter(item => item != country);
    setBookmark(newBookmarks)
  }

  return (
    <div>
      <ul>
        {
          bookmark.map((item, index) =>
            <li
              key={index}>{item} <span onClick={() => handleRemoveBookmark(item)} className='bookmark-remove'>[Remove]</span>
            </li>)
        }
      </ul>
      <div className="countries">
        {
          countries.map((country, idx) => <Country key={idx} country={country} handleBookmark={handleBookmark}></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;