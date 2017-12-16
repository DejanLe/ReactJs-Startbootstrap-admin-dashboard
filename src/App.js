import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Sb-admin.css';
import './Bootstrap.css';

import Navbars from './Components/Navbars';
import Breadcrumb from './Components/Breadcrumb';
import Newsmessages from './Components/Newsmessages';
import AreaChart from './Components/AreaChart';
import BarChart from './Components/BarChart';
import Datatable from './Components/Datatable';
import Footer from './Components/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
          
           <div className="content-wrapper">
              <div className="container-fluid">
                  <Navbars />
                  <Breadcrumb />
                  <Newsmessages />
                  <AreaChart />
                  <BarChart />
                  <Datatable />
                  <Footer />  



                </div>
              </div> 
      </div>
    );
  }
}

export default App;
