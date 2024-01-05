import React, { Component } from 'react';
import NavBar from './components/navbar';
import Newsitem from './components/newsitem-3';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact key="sports" path="/sports" element={<Newsitem pageSize="10" countryName="in" category="sports" />} />
            <Route exact key="business" path="/business" element={<Newsitem pageSize="10" countryName="in" category="business" />} />
            <Route exact key="tech" path="/technology" element={<Newsitem pageSize="10" countryName="in" category="technology" />} />
            <Route exact key="entertainment" path="/entertainment" element={<Newsitem pageSize="10" countryName="in" category="entertainment" />} />
            <Route exact key="general" path="/" element={<Newsitem pageSize="10" countryName="in" category="general" />} />
            
            <Route exact key="general" path="/general" element={<Newsitem pageSize="10" countryName="in" category="general" />} />
            
            <Route exact key="health" path="/health" element={<Newsitem pageSize="10" countryName="in" category="health" />} />
            <Route exact key="science" path="/science" element={<Newsitem pageSize="10" countryName="in" category="science" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
