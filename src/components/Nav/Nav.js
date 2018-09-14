import React from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUsername, getProfilePic} from '../../ducks/reducer'



function Nav (props) {

    if(props.location.pathname === '/'){
        return (
            <div></div>
            )
        } else {
            
        return (
                
    <div className = 'nav'>
        {/* <h2>Welcome User: {this.props.username}</h2> */}
        {/* <img src={this.props.profile_pic} alt=""/> */}
    <Link to = '/dashboard'> <button>Home</button></Link>
    <br/>

    <Link to = '/new'><button>New Post</button></Link>
    <br/>

    <Link to = '/'><button>Logout</button></Link>


    </div>


    )
}
}
function mapStateToProps(state){
    const {username, profile_pic} = state
    return {
    username,
    profile_pic
   
    }
}

export default connect(mapStateToProps)(withRouter(Nav))
