import React from 'react'
import { Link } from 'react-router'

export default function Navbar(props) {

    return (
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="navbar-header" id="brandname">
                <a className="navbar-brand" href="/">
                    <span> Margaret Hamilton Interplanetary Academy of Javascript</span>
                </a>
            </div>
            <div className="collapse navbar-collapse" id="mainnav">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/campuses">Campuses</a>
                    </li>
                    <li>
                        <a href="/students">Students</a>
                    </li>
                </ul>
            </div>
        </nav>
    )

}