import { useEffect, useState } from "react"
import Country from "../Country/Country";
import './Countries.css'

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country =>{
        console.log('add this to your visited country');
        // console.log(countries);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag => {
        console.log('flag adding')
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }
    
    return (
        <>
            <h3>Countries: {countries.length}</h3>
            {/* Visited country */}
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                    {
                        visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                    }
            </div>
            {/* display Countries */}
            <div className="countries">
                {
                    countries.map(country => <Country country={country} handleVisitedCountry={handleVisitedCountry} key={country.cca3}
                    handleVisitedFlags = {handleVisitedFlags}></Country>)
                }
            </div>

        </>
    )
}