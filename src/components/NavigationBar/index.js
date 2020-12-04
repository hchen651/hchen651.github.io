
// React
import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

export default function NavigationBar() {
    return (
        <nav id="navbar" class="navbar navbar-light sticky-top bg-light">
        <a class="navbar-brand site-logo" href="#">HENRY CHEN</a>
        <ul class="nav nav-pills">
            <li class="nav-item">
                    <NavHashLink
                        className="nav-link"
                        smooth to="/#recent-work"
                        activeClassName="selected"
                        activeStyle={{ color: 'red' }}
                    >
                        Recent Work
                    </NavHashLink>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#resume">Resume</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
            </li>
        </ul>
    </nav>
    );
}