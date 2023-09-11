import { useState } from "react";
import CountryDetail from "../CountryDetails/CountryDetail";

const Country = (props) => {
  const {country,handleVisitedCountry} = props;
    const {name,flags,independent,area,cca3} = country;
    const [visited,setVisited] = useState(false);

    const handleVisited = () => {
      setVisited(!visited)
    }
    // console.log()
    // const passWithCountry =
    
  return (
    <>
       <div className={`card  shadow-xl p-4 ${visited ? 'bg-red-500 text-white' : 'bg-base-100'}`}>
        <figure className="h-52">
            <img src={flags.png} alt={flags.alt} className="h-full"  />
        </figure>
            <div className="card-body ">
                <h2 className="card-title">{name.common}</h2>
                <p>{name.official}</p>
                <h2>{independent ? 'Freedom Country' : 'Un-Freedom Country'}</h2>
                <h2>{area}</h2>
                <h2>{cca3}</h2>
                <button onClick={() => handleVisitedCountry(country)} className="btn btn-primary">Mark Visited</button>
                <button className="btn btn-primary" onClick={handleVisited}>{visited ? "Visited" : 'Going'}</button>
                {visited ? 'I have visited this country' : 'I want to visit'}
                <CountryDetail {...props}/>
            </div>
        </div>
    </>
  )
}

export default Country;
