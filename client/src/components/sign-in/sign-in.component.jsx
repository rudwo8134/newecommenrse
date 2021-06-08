import React,{useState} from 'react';
import {connect} from 'react-redux'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {googleSignInstart,emailSignInstart} from '../../redux/user/user.actions'
import './sign-in.styles.scss';

const SignIn = ({emailSignInstart,googleSignInstart}) => {
  const [userCredentials, setCredentials] = useState({
    email:'', password:''
  })

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = userCredentials
    emailSignInstart(email,password)

  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({...userCredentials, [name]: value });
  };
  const { email, password } = userCredentials
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton type='button' onClick={googleSignInstart} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }


const mapdispathtoprops = dispatch =>({
  googleSignInstart: () => dispatch(googleSignInstart()),
  emailSignInstart: (email,password) =>dispatch((emailSignInstart({email,password})))
})

export default connect(null,mapdispathtoprops)(SignIn);
