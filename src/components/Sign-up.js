import React, { useState, useEffect } from "react";
import Header from './Header';
import { Button, Form, Container } from 'react-bootstrap';
import axios from 'axios'
import {useHistory} from 'react-router-dom';

function SignUp () {
    const history=useHistory();
    const [
        user,setUser
    ]=useState({});

    const [
        error, setError
    ]=useState("");
    const [
        success, setSuccess
    ]=useState("");

    useEffect(()=>{
        if(success){
            setTimeout(() => {
                history.push('/login');
                
            }, 2000);
        }
    },[success])
    const createAccount=(e)=>{
        axios.post('http://localhost:8085/sign-up', user ).then(response=>{
            console.log("client side")
            setUser(response.data)
            console.log(user)
        setSuccess(response.data); 
        }).catch(err=>{
            console.log(err);
            setError(err.data);

        }
        )
        e.preventDefault();
    }

        
        return (

            <Container>
                <Header />
                <h2>Create a new account</h2>
                <Form onSubmit={createAccount}>
                    
                    <Form.Group controlId="formBasicText">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control  type="text" name='first_name' placeholder="First name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicText">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name='last_name' placeholder="Last name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicDate">
                        <Form.Label>Date Of Birth</Form.Label>
                        <Form.Control type="date" name='date_of_birth' placeholder="Date Of Birth" />
                    </Form.Group>

                    <Form.Group controlId="formBasicText">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="text" name='gender' placeholder="Gender" />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Street</Form.Label>
                        <Form.Control type="text" name='street' placeholder="Street" />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" name='location' placeholder="Location" />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" name='city' placeholder="City" />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" name='state' placeholder="State" />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control type="text" name='pincode' placeholder="Pincode" />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" name='mobile_no' placeholder="Mobile Number" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email_id' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>



                    {/* <Button onClick={createAccount} variant="primary" block> */}
                    <Button  variant="primary" type="submit" block>
                        Create Account
                    </Button>
                </Form>
                {/* {success && "You have sucessfully created your account"} */}
            </Container>
        )
}

export default SignUp;