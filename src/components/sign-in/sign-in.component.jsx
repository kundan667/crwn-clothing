import { Component } from 'react'

import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const { email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password:'' });
        }
        catch(err){
            console.log(err);
        } 
    }
    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign with your email and password</span>
                <form onSubmit={ this.handleSubmit }>
                    <FromInput type="email" 
                        name="email" 
                        value={ this.state.email } 
                        handleChange={ this.handleChange }
                        label="Email"
                        required />
                    <FromInput type="password" 
                        name="password"
                        value={ this.state.password }
                        handleChange={ this.handleChange }
                        label="password"
                        required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in </CustomButton>
                        <button className="google-sign-in" onClick={ signInWithGoogle }>Sign in with google</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn