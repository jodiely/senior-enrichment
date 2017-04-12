import React, { Component } from 'react';
import Navbar from './Navbar'


export default function App({ children }) {
    console.log({children})
    return (
        <div id="main" className="container-fluid">
            <Navbar />
            <div className="col-xs-10">
                {children}
            </div>
        </div>
    )
}