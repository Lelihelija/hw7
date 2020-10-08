import React from 'react';
import './App.css';
import TopPanel from './components/top-panel/top-panel';
import {HashRouter as Router,Switch, Route, Redirect} from "react-router-dom";
// import { useStore } from 'react-redux';
import UserContainer from './components/users/users';
import AddUser from './components/add-user/add-user';
import TweetsList from './components/tweets-list/tweets-list';
import AddTweet from './components/add-tweet/add-tweet';


export const MENU = [
    {
    title: "Users",
    path: "/users",
    component: UserContainer,
    index: 1,
  }, {
    title: "Add user",
    path: "/add-user",
    component: AddUser,
    index: 2,
  },{
    title: "Tweets list",
    path: "/tweets-list",
    component: TweetsList,
    index: 3,
  },{
    title: "Add tweet",
    path: "/add-tweet",
    component: AddTweet,
    index: 4,
  }, 
];

function App() {
  return (
    <div className="App">
      <Router>
        <TopPanel/>
        <Switch>
            {MENU.map(({path, component, index}) => (
                <Route path={path} key={index} component={component}/>
            ))}
            <Route path="/" exact render={() => <Redirect to="/users"/>}/>  
            <Route exact render={() => <Redirect to="/users"/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
