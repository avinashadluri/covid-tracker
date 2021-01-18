/* eslint-disable no-unreachable */
import React from 'react';
import useStats from '../hooks/useStats';
import CountryItem from './CountryItem';
import Loader from './Loader';
import '../styles/list.css';

function AllCountries() {
  const { stats, loading, error } = useStats(
    'https://corona.lmao.ninja/v2/countries?sort=cases'
  );
  // let ISO3CountryCodes = {}
  // stats && stats.map(country => {
  //   if(country.countryInfo.iso3) {
  //     ISO3CountryCodes[country.countryInfo.iso3] = country.country
  //   }else {
  //     console.log(country)
  //   }
  //   return country
  // })
  // console.log(ISO3CountryCodes)

  return (
    <div className="stats-container">
      {error ? (
        <h4 className="error">Looks like there is a problem...</h4>
      ) : null}
      {loading ? <Loader /> : null}
      {stats && !loading && !error ? (
        <>
          <h2>All countries</h2>
          {stats.map(
            ({
              cases,
              active,
              country,
              recovered,
              deaths
            }) => (
              <CountryItem
                title={country}
                count={{ cases, active, recovered, deaths }}
                key={country}
              />
            )
          )}
        </>
      ) : null}
    </div>
  );
}

export default AllCountries;
