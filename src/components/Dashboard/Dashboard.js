import React, { Component } from 'react'


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts: [],
            search: '',
            userposts: true
         }
         this.handleInput = this.handleInput.bind(this)
    }
  
    handleInput(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
  
  
  
    render() { 
        return ( 
            <div>
                <hr/>
                Dashboard
                <br/>
                <input type="text" onChange={e=>{this.handleInput(e)}} placeholder = 'search'/>
                <br/>
                <button>Search</button>
            </div>
         )
    }
}
 
export default Dashboard;
