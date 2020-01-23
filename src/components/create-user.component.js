import React, { Component } from './node_modules/react';
import axios from '../../client/node_modules/axios';

export default class CreateUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        axios.post(process.env.REACT_APP_BASE_URL + '/users/add', user)
            .then(res => console.log(res.data))

        this.setState({
            username: ''
        })
    }

    render() {
        return (
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h3>Create New User</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                  <label>Username: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                      />
                </div>
                <div className="form-group">
                  <input type="submit" value="Create User" className="btn btn-info" />
                </div>
              </form>
            </div>
          </div>
        )
      }
}