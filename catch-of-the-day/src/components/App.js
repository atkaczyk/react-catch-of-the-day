
import React from 'react';


import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
//our state lives in our app
class App extends React.Component {
   render() {
       return (
           <div className="catch-of-the-day">
               <div className="menu">
                   { /* Header is a self closing tag */ }
                   <Header tagline="Phresh seafood market"/>
               </div>
                <Order />
                { /* Remove AddFishForm in order for the inventory to render */}
                <Inventory />

           </div>

       ) 
   }
}

export default App;