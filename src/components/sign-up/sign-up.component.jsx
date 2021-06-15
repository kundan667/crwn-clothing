import { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FromInput from "../form-input/form-input.component";
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss'

class SignUp extends Component{
    constructor(){
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if( password !== confirmPassword ){
            alert("Password do not match");
            return
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument( user, { displayName } )
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }
        catch(err){
            console.log("err:::",err);
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className="sign-up">
                <h1 className="title">I do not have account</h1>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={ this.handleSubmit }>
                    <FromInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={ this.handleChange }
                        label="Display Name"
                        required/>

                    <FromInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={ this.handleChange }
                        label="Email"
                        required/>

                    <FromInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={ this.handleChange }
                        label="Password"
                        required/>

                    <FromInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={ this.handleChange }
                        label="Confirm Password"
                        required/>

                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;