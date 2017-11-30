import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
// BrowserRouter interacts with the 'History' library, which is a separate library that gets installed as a dependency of React Router DOM
// It decides what to do based on a URL change => looks at the entire URL when deciding what different components to show on the screen
// Route is the workhorse of React Router. It's a React component that we can render inside of any other React component in our app.
// It provides the configuration of what components to show based on the URL.
import { BrowserRouter, Route} from 'react-router-dom';

import reducers from './reducers';
import Header from './components/Header';
import PostsIndex from './containers/PostsIndex';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// <BrowserRouter> tag occurs once, declares a router instance
// We would get an error if all the tags inside of it were NOT nested in side of one <div> tag => "A <router> may have only one child element"
// i.e. we must wrap <Route> tags and other <Component> tags inside of a <div> within our <BrowserRouter> tag
// <Route> tags take 2 REQUIRED props
// 1. path="___" - almost always a string corresponding to the relative URL hit by the user
// 2. component={___} - specifies what <Component /> to show the corresponding path is hit
// Can also put <Component />'s directly inside of our <BrowserRouter> - THESE SHOW IN EVERY ROUTE
// --> This would be the way to handle a header/footer and such.
// NOTE: PUTTING THE KEYWORD "exact" inside our base '/' <Route /> component prevents it from showing all the time
// --> otherwise it would still show up in every route, the same as just including a component reference directly inside our <div>, i.e. not in a <Route /> component
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
			<div>
				<Header />
				<Route exact path="/" component={PostsIndex} />
			</div>
		</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
