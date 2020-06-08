import React from 'react';
import './App.css';
import MoviesTable from './components/MoviesTable';
import obraz1 from './obraz1.jpg';

function App() {
    return (
        <div className="container">
            <div className="col-sm-6 float-left">
                <MoviesTable />
            </div>
            <div className="col-sm-6 float-left">
                <img src={obraz1} alt="" width="100%"/>
            </div>
        </div>
    );
};

export default App
