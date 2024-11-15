import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);
    const visitedHandler = () => {
       setVisited(!visited);
    }
    const passWithParams = () => {
        handleVisitedCountry(country);
    }
    return (
        <div className= {`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'green' : ''}}>Name: {name?.common}</h3>
            
            <img src={flags.png}alt="" />
            <h3>Population: {population}</h3>
            <h3>Area: {area}</h3>
            <h3>Code: {cca3}</h3>
            <button onClick={passWithParams}>Mark Visited</button>
            <br />
            <button onClick={visitedHandler}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited' : 'Going to visit'}
        </div>
    );
};

export default Country;