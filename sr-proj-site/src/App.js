import "./App.css";

import FourUps from "./FourUps";
import Home from "./Home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="app">
            <Router>
                <div className="nav-bar">
                    <div className="nav-bar-option">
                        <Link to="/Sr.-Project-Team-Website">Home</Link>
                    </div>
                    <div className="nav-bar-option">
                        <Link to="/four-ups">4-Ups</Link>
                    </div>
                </div>
                <div className="content">
                    <Routes>
                        <Route
                            exact
                            path="/Sr.-Project-Team-Website"
                            element={<Home />}
                        />
                        <Route path="/four-ups" element={<FourUps />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
