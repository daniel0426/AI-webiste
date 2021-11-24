import './app.css';
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers/index';
import {CTA, Brand, Feature, Navbar, Article} from './components/index';
import './app.css'

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;
