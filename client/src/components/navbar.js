import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
      return (
        <nav className="navbar navbar-dark bg-info navbar-expand-lg">
          <Link to="/" className="navbar-brand">WorkoutLog</Link>
                <ul className="navbar-nav collapse navbar-collapse justify-content-end">
                  <li className="navbar-item">
                    <Link to="/user" className="nav-link">Create User</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Exercise Log</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">All Workouts</Link>
                  </li>
                </ul>
        </nav>
      );
    }
  }
