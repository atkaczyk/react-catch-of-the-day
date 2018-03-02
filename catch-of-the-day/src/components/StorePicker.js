
import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component { //this is an es6 class
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this); //binds to the object this to this component
    // }
//(e) => this.goToStore(e) this way of doing it will call multiple instances of function where constructor is better but, depends if it effects your component

    goToStore(event) {
        event.preventDefault(); //prevent default prevents the default from happening which in this case is refreshing the page because the form default behaviour is to submit to the action or just refresh and we dont want that
        console.log("You changed the URL");
        //first grab text from box
        console.log(this.storeInput.value);
        const storeId = this.storeInput.value;
        //then transition to co)rrect url from / to /store/:storeId
        //you can surface any parent component and we want to leverage the browserrouter using something called context which is like making a global thing but still best to use state except for routers
        //use context
        this.context.router.transitionTo(`/store/${storeId}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                {/*How to comment in jsx is like this, can only do within the same block not 2 parents just a single parent right so comment is its own thing has to be wrapped*/}
                <h2> Please enter a store</h2>
                <input type="text" required placeholder="Store Name"
                    defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
                <button type="submit"> Visit store </button>
                <p>Store picker component whats wrong with my syntax highlighter</p>
            </form>

        ) 
    }
}

//surfacing the router, tell react the store picker component expects something called router
StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;