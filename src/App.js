import React from 'react';

import {
  Stats,
  Header,
  Footer,
  CountrySelector,
  CountryList,
  Tabs
} from './components';

import './App.css';

function App() {
  const tabs = [
    {
      name: 'Country Select',
      component: <CountrySelector />
    },
    { name: 'Country List', component: <CountryList /> },
    { name: 'Charts', component: <CountryList /> },
  ];

  return (
    <>
      <Header />
      <div className="container">
        <Stats title="Global" />
        <CountrySelector />
        <CountryList />
        {/* <Tabs tabs={tabs} /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
