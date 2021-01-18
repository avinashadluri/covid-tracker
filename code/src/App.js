import React, { useState } from "react";
import ReactGA from "react-ga";
import Select from "react-select";
import { ISO3CountryCodes } from "./utils/utils";
import { Stats, Header, Footer, AllCountries, Curve } from "./components";
import "./App.css";

function App() {
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  let countries = [];
  Object.entries(ISO3CountryCodes).map(([code, country]) =>
    countries.push({ value: code, label: country })
  );
  return (
    <>
      <Header />
      <div className="menu">
        <ul className="menu-ul">
          <li>
            {selectedCountryCode
              ? ISO3CountryCodes[selectedCountryCode]
              : "Global"}
          </li>
        </ul>
      </div>
      <div className="stats-section">
        <Select
          options={countries}
          label="Select country"
          className="select-css"
          isClearable
          onChange={(e) => {
            ReactGA.event({
              category: "Selected country",
              action: e && e.value ? ISO3CountryCodes[e.value] : 'Global',
            });
            e && e.value ? setSelectedCountryCode(e.value):setSelectedCountryCode('');
          }}
        />
      </div>
      <div className="stats-cards">
        {selectedCountryCode ? (
          <Stats
            url={`https://corona.lmao.ninja/v2/countries/${selectedCountryCode}`}
          ></Stats>
        ) : (
          <Stats url={`https://corona.lmao.ninja/v2/all`}></Stats>
        )}
      </div>
      <br />
      {selectedCountryCode ? (
          <Curve
            url={`https://corona.lmao.ninja/v2/historical/${selectedCountryCode}?lastdays=60`}
            selectedCountryCode={selectedCountryCode}
          ></Curve>
        ) : (
          <Curve url={`https://corona.lmao.ninja/v2/historical/all?lastdays=60`}></Curve>
        )}
      <br />
      <AllCountries />
      <Footer />
    </>
  );
}

export default App;
