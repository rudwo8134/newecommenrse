import React,{useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import {Globalstyle} from './global.style'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';



import { selectCurrentUser } from './redux/user/user.selectors';
import {selectCollectionsForPreview} from './redux/shop/shop.selectors'
import {checkUsersession} from './redux/user/user.actions'

const App =({checkUsersession,currentUser})=> {
  useEffect(()=>{
    checkUsersession()
  },[checkUsersession])


    return (
      <div>
        <Globalstyle/>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchtoprops = dispatch =>({
  checkUsersession: ()=>dispatch(checkUsersession())
})


export default connect(
  mapStateToProps,
  mapDispatchtoprops
)(App);
