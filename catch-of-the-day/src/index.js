// let's go!

//import libraries here as we need them
//module bundler is going to take all js files, imports and exports and pack it into a tidy js file.
//reacts most popular es bundler is WEBPACK to bundle all js.

//behind the scenes we use create react app config setup that uses webpack behind the scenes too.
//industry standard for using routing in react is the REACT router. there are things to import as seen below -- everything in react is a component, even the router itself

//react is all client side so it uses html push state, changes the url but doesnt refresh the actual browser
import React from 'react';
import { render } from 'react-dom'; //webpack will look for strings in node modules directory
import { BrowserRouter, Match, Miss } from 'react-router';


import './css/style.css';

import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';


//render(<StorePicker/>, document.querySelector('#main'));
//you can put matches anywhere in your components

const Root = () => {
    return (
        <BrowserRouter>
        <div> {/*Match cant be a direct child of browser router - why?*/}
            <Match exactly pattern="/" component={StorePicker}/>
            <Match pattern="/store/:storeId" component={App}/>  
            <Miss component={NotFound}/>        
        </div>
        </BrowserRouter>
    )
}
render(<Root/>, document.querySelector('#main'));
