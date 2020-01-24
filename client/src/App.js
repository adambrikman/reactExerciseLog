import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ExercisesList from "./components/exercises-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />

        <br/>
        
        <Route exact path="/" component={ExercisesList} />
        <Route exact path="/user" component={CreateUser} />
        <Route exact path="/edit/:id" component={EditExercise} />
        <Route exact path="/create" component={CreateExercise} />
      </div>
    </Router>
  );
}

export default App;
