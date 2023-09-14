import "./assets/main.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FooterPage from "./pages/FooterPage";
import HeaderPage from "./pages/HeaderPage";
import CardList from "./pages/CardList";
import './quote.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <div className="min-h-screen flex flex-col">

            <div className="flex-grow">
              <HeaderPage />
                <div className="flex items-center justify-center">
                  <CardList /> {/* Shows cards and their data from db*/}
                </div>
            </div>

            <footer className="mt-auto">
              <FooterPage />
            </footer>
            
          </div>
        </Route>
      </Router>
    </div>
  );
}

export default App;
