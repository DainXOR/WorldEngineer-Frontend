/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route, Navigate, A } from '@solidjs/router';

import './index.css';
import App from './App';
import HomePage from './pages/Home'
import SignPage from './pages/Sign'
import ProjectsPage from './pages/Projects'
import ProfilePage from './pages/Profile'
import NotFoundPage from './pages/NotFound';
import Example from "./components/Example";

import Redirect from './components/Redirect';

import { api } from './http/api/requestsApi';
import { AuthApi } from './http/api/authApi';
import { UsersApi } from './http/api/usersApi';
import { UtilsApi } from "./http/api/utilsApi";

// const root = document.getElementById('root');

// if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
//   throw new Error(
//     'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
//   );
// }

const backApi = new api(
  "https://sjvf78xp-8080.use2.devtunnels.ms", 
  "http://localhost:8080", 
  "api/v0"
);
const proxyApi = new api(
  "https://sjvf78xp-8080.use2.devtunnels.ms", 
  "http://localhost:6969", 
  "api/v0"
);

UsersApi.init(backApi);
AuthApi.init(backApi);
UtilsApi.init(backApi);

const connectionResult = await backApi.connect();

console.log('backApi:', connectionResult);

//let res = await UtilsApi.checkUsername("MancersDhiskey#123456")
//console.log(res);


render(() => 
  (
    <Router root={App} url="/home">
      <Redirect from="/*" to="/home" />
      <Route path="/home" component={HomePage} />
      <Route path="/sign" component={SignPage} />
      <Route path="/:nameTag/projects" component={ProjectsPage} />
      <Route path="/:nameTag/profile" component={ProfilePage} />
      <Route path="/test" component={Example} />
      
    </Router>
  ), 
  document.getElementById('root')
);
// <Route path="/*paramName" component={NotFoundPage} />