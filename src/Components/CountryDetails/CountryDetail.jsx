import CountryData from "./CountryData"

const CountryDetail = ({country,handleVisitedCountry}) => {
  return (
    <div>
     <CountryData country={country} handleVisitedCountry={handleVisitedCountry} />
    </div>
  )
}

export default CountryDetail
