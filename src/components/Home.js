import React from "react";
import Header from './Header';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <h3>Book your appointment from your comfort</h3>
                <Link to='/login'>Login</Link><br></br>
                <Link to='/sign-up'>Create Account</Link>
            </div>
        )
    }
}

export default Home;