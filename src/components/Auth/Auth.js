import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import {getUsername, getProfilePic} from '../../ducks/reducer'
import {connect} from 'react-redux'
import {updateId, updateUsername, updatePic} from '../../ducks/reducer'




class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
            id: 0,
            helousers: []
            
         }
         this.handleInput = this.handleInput.bind(this)
         this.register = this.register.bind(this)
         this.login = this.login.bind(this)
    }
    
    handleInput(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
    
      register(){
        let {username, password} = this.state
        axios.post('/api/auth/register', {username, password})
        .then(res=>{
            this.props.updateId(res.data[0].id);
            this.props.updateUsername(res.data[0].username);
            this.props.updatePic(res.data[0].profile_pic);
        })        
    }

    login(){
        let {username, password} = this.state
        axios.post('/api/auth/login', {username, password})
        .then(res=>{
            this.props.updateId(res.data[0].id);
            this.props.updateUsername(res.data[0].username);
            this.props.updatePic(res.data[0].profile_pic);
        })

    }


    
    render() { 
        return ( 

            <div>
                <h1>HELO</h1>
            <hr/>
            <h2>Please Login</h2>
            <input type="text" name ="username" value={this.state.username} onChange={e=>{this.handleInput(e)}} placeholder="Enter Username"/>

            <input type="text" name="password" value={this.state.password} onChange={e=>{this.handleInput(e)}} placeholder="Enter Password"/>
            
            <br/> <br/>

            <Link to = '/dashboard'><button onClick = {this.login}>Login</button></Link>
            <br/>
            <Link to = '/dashboard'><button onClick = {()=>this.register()}>Register</button></Link>

            </div>
         )
    }
}
// function mapStateToProps(state){
//     const {id, username, profile_pic} = state
//     return {
//         id,
//         username,
//         profile_pic
//     }
// }
 
export default connect(null, {updateId, updateUsername, updatePic})(Auth);

