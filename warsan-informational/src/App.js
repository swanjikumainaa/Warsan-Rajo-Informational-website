import Product from './components/Product';

import React from 'react';
import './App.css';
import Layout from './components/Layout';
import HomePage from './components/Home';
import About from './components/AboutUs'
import Team from './components/Team';



function App() {
  return (
    <div className="App" data-testid="app-component">
      <Layout>
      <HomePage/>
      <Product/>
      <About/>
      <Team/>
      </Layout>

    </div>
  );
}
export default App;                                                                                                         