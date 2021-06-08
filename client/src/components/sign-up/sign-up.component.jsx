import React,{useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux'

import {signupStart} from '../../redux/user/user.actions'
import './sign-up.styles.scss';

const SignUp= ({signupStart})=> {
const [userCredential,setcredential] = useState({
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
})

  const handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userCredential;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signupStart({
      email,
      password,
      displayName
    })

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   await createUserProfileDocument(user, { displayName });

    //   this.setState({
    //     displayName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setcredential({...userCredential, [name]: value });
  };

  const { displayName, email, password, confirmPassword } = userCredential;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }


const mapdispatchtoprops = dispatch =>({
  signupStart:(info) =>dispatch(signupStart(info))
})

export default connect(null,mapdispatchtoprops)(SignUp);
