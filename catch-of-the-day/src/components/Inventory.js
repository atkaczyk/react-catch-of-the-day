
import React from 'react';
import AddFishForm from "./AddFishForm";

class Inventory extends React.Component {
   
   render() {
       return (
           <div>
               <h2>inventory</h2>
               <AddFishForm addFish={this.props.addFish}/>
               <button onClick={this.loadSamples}> Load Sample Fishes </button>
           </div>

       ) 
   }
}

export default Inventory;