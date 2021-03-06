import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.exercise._id}>edit</Link> | <span style={{color: '#007bff'}} onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</span>
      </td>
    </tr>
  )

export default class ExercisesList extends Component {

    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);
    
        this.state = { exercises: [] }
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_BASE_URL + '/exercises/')
            .then(res => {
                this.setState({ exercises: res.data })
            })
            .catch((e) => {
            })
    }

    deleteExercise(id) {
        axios.delete(process.env.REACT_APP_BASE_URL + '/exercises/'+id)
            .then(res => res.data);
            
        this.setState({
            exercises: this.state.exercises.filter( el => el._id !== id)
        })
    }

    exerciseList() {
        return this.state.exercises.map(currentExercise => {
            return <Exercise exercise={currentExercise} deleteExercise={this.deleteExercise} key={currentExercise._id} />;
        })
    }

    render() {
        return (
          <div>
            <h3>Logged Exercises</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Username</th>
                  <th>Description</th>
                  <th>Duration (minutes)</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.exerciseList() }
              </tbody>
            </table>
          </div>
        )
      }
}