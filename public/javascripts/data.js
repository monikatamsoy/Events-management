import React, { Component } from 'react'

class Data extends Component {

      constructor(){
        super();
        this.state = {
          data:[]
        }
      }

      componentDidMount() {
        fetch("/api")
        .then(response => response.json())
        .then(data => this.setState({data}));
      }

      render() {
        var data= this.state.data
        console.log(data)
        return (
          <div  className="App">
            <ul>
              {this.state.data.map(user =>
              <li key={user._id}>{user._id}</li>)}
            </ul>
          </div>
        );
      }

  }

export default Data
