import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MessageForm from './components/MessageForm.js';
import DisplayAllMessages from './components/DisplayAllMessages.js';
import './App.css';

function App() {
    return (
        <Router>
            <nav>
                <Link to = "/create-message"> Create Message </Link>
                <Link to = "/"> Home!!!!!!!!!!!!!!!!</Link>
            </nav>
            <Routes>
                <Route path = "/create-message" element = { <MessageForm /> } />
                <Route path = "/" element = {<DisplayAllMessages />} />
            </Routes>
        </Router>
    );
}

export default App;