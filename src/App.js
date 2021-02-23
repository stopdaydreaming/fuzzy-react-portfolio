import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>

        <Footer />
      </div>
      </div>
    </Router>
  );
}

export default App;
