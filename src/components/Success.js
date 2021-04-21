import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Success extends Component{
    render(){
        return(
            <div>
                <h3>You have successfully created your Account</h3>
                <Link to='/login'>Login</Link>
            </div>
        )
    }
}

export default Success;