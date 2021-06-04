import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// redux
import {connect} from 'react-redux'
// redux-action
import {setcurrentUser} from './redux/User/user.action'


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setcurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
        setcurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        })
      
        });
      }

      setcurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  // if we dont use the redux. we have to drill down the currentUser as props
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const MapsdispatchtoProps = (dispatch) =>({
setcurrentUser: user => dispatch(setcurrentUser(user))
})


export default connect(null, MapsdispatchtoProps)(App) ;
