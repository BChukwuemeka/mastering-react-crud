import { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import Movies from './components/movies';
import Navbar from './components/navbar/Navbar';

class App extends Component {
  state = { 
    counters : [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
 } 

 handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter)
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters: counters})
 }

 handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter)
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters: counters})
 }



 handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({counters: counters})
 }


 handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: counters});
 }  
 
 render() { 
    return (
      <div className="App">
      {/* <Navbar totalCounters={this.state.counters.filter(c => c.value>0).length}/>
      <main className="container">

      <Counters 
      counters={this.state.counters}
      onIncrement={this.handleIncrement} 
      onDecrement={this.handleDecrement} 
      onReset={this.handleReset} 
      onDelete={this.handleDelete} />
      </main> */}
      <Movies/>
    </div>
    );
  }
}
 
export default App;