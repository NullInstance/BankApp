import React from 'react';
import { Router } from "@reach/router";
import Navbar from './components/Navbar/navbar';
import Home from './views/Home/home';
import Merchant from './views/Merchant/merchant';
import Merchants from './views/Merchants/merchants';
import Customer from './views/Customer/customer';
import Customers from './views/Customers/customers';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className={'container'}>
        <Router>
          <Home path="/"/>
          <Merchants path="/Merchants"/>
          <Merchant path={"/Merchants/:merchantId"}/>
          <Customers path={"/Customers"}/>
          <Customer path={"/Customers/:customerId"}/>
        </Router>
      </div>
    </div>
  );
}

export default App;
