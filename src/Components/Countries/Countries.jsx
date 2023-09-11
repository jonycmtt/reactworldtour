import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries,setCountries] = useState([]);
  const [visitedCountries,setVisitedCountries] = useState([]);

  const handleVisitedCountry = (country) => {
   const newVisitedCountry = [...visitedCountries,country];
   setVisitedCountries(newVisitedCountry)
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return (
    <>
    <div>
      <h3>Goto Others Country</h3>
      <ul>
       {
        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
       }
      </ul>
    </div>

    <div className="container mx-auto grid grid-cols-4 my-10 gap-4">
      
      {
       countries.map((country) => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} country={country}/> )
      }
     </div></>
  )
}

export default Countries
