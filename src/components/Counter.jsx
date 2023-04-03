import React, { Component } from 'react';

class Counter extends Component {
    // state = { 
    //     value: this.props.counter.value,
    //     tags: ['tag1','tag2','tag3']
    //  } 

    //  constructor(){
    //     super();
    //     this.handleIncrement.bind(this)

    //  }

//      handleIncrement=(product)=>{
// this.setState({value: this.state.value + 1});
//      }



    render() { 

        // console.log(this.props)

        return (
            <div className='container'>
            {/* <ul>
               { this.state.tags.map(tag => <li key={tag}>{tag}</li>
                )}
            </ul> */}
            {/* <h4>{this.props.id}</h4> */}

            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm m-2'>Increment</button>
            <button onClick={() => this.props.onDecrement(this.props.counter)} className={this.getBadgeClass()}>Decrement</button>
            <button onClick={()=> this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }


    formatCount = () => {
        const {value: count} = this.props.counter;
            return count === 0 ? "Zero" : count
    }

    getBadgeClass() {
        let classes = "btn btn-secondary btn-sm";
        classes += (this.props.counter.value === 0) ? " disabled" : "";
        return classes;
    }
}
 
export default Counter;