import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('components/containers/TheLayout'));
const SampleTheLayout = React.lazy(() => import('samples/containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('views/users/login/Login'));
const SampleLogin = React.lazy(() => import('samples/pages/login/Login'));
const SampleRegister = React.lazy(() => import('samples/pages/register/Register'));
const SamplePage404 = React.lazy(() => import('samples/pages/page404/Page404'));
const SamplePage500 = React.lazy(() => import('samples/pages/page500/Page500'));

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/sample/login" name="Login Page" render={props => <SampleLogin {...props}/>} />
              <Route exact path="/sample/register" name="Register Page" render={props => <SampleRegister {...props}/>} />
              <Route exact path="/sample/404" name="Page 404" render={props => <SamplePage404 {...props}/>} />
              <Route exact path="/sample/500" name="Page 500" render={props => <SamplePage500 {...props}/>} />
              <Route path="/sample" name="Home" render={props => <SampleTheLayout {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
