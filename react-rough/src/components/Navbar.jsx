import '../css/navbar.css'
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';

export default function Navbar() {
    return (
        <>
        <Router>
            <nav>
                <div className="nav-logo">
                    <h1>Cotivity</h1>
                </div>
                <div className="nav-item">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Contact' element={<Contact/>}></Route>
                <Route path='/About'element={<About/>}></Route>
            </Routes>
            </Router>
        </>
    )
}
