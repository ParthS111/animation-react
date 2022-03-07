import './App.css';

import { Article, Brand, CTA, Navbar } from './components/index'
import { Features, Header, Blog, Possibility } from './containers/index'
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Features />
      <CTA />
      <Blog />
    </div>
  );
}

export default App;
