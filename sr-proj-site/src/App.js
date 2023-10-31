import "./App.css";

import FourUps from "./FourUps";
import TimeTracking from "./TimeTracking";
import Home from "./Home";
import Requirements from "./Requirements";

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
                    <div className="nav-bar-option">
                        <Link to="/requirements">Requirements</Link>
                    </div>
                    <div className="nav-bar-option">
                        <Link to="/time">Time Tracking</Link>
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
                        <Route path="/requirements" element={<Requirements />} />
                        <Route path="/time" element={<TimeTracking />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
