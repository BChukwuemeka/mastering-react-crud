import React, { Component } from 'react';
import Counter from './Counter';



class Counters extends Component {
    

    render() { 

        const {onReset, onDelete, onIncrement,onDecrement, counters} = this.props;

        


        return (
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                    
                {counters.map(counter => 
                    (<Counter 
                    key={counter.id} 
                    onDelete={onDelete} 
                    // value={counter.value} 
                    // id={counter.id} 
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    counter={counter}
                    >
                     
                     {/* <h4>Counter #{counter.id}</h4> */}
                     
                     </Counter>)
                     
                     )}

             </div>
        );
    }
}
 
export default Counters;