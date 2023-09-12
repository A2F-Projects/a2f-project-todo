import "./assets/main.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuotePage from "./pages/QuotePage";
import FooterPage from "./pages/FooterPage";
import HeaderPage from "./pages/HeaderPage";
import ToDoList from "./component/ToDoList";
import TodoList from "./component/ToDoListAndInput";
import CardList from "./pages/CardList";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <div class="min-h-screen flex flex-col">

            <div class="flex-grow">
              <HeaderPage />
                <div class="flex items-center justify-center">
                <CardList /> {/* Shows cards and their data from db*/}
              </div>
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
