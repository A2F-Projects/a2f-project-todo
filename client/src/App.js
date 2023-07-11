import "./assets/main.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuotePage from "./pages/QuotePage";
import FooterPage from "./pages/FooterPage";
import HeaderPage from "./pages/HeaderPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <div class="min-h-screen flex flex-col">

            <div class="flex-grow">
              <HeaderPage />
              <QuotePage />
            </div>

            <footer class="mt-auto">
              <FooterPage />
            </footer>
            
          </div>
        </Route>
      </Router>
    </div>
  );
}

export default App;
