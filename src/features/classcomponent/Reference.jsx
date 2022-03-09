import React, { Component } from 'react'
import { connect } from "react-redux";
import { increment} from '../counter/counterSlice'

 class Reference extends Component {
    
    
  render() {

    let counter = this.props.counter;
    // console.log(counter)
    // let text = this.props.text.value;
    return (
      <div>
          <h1>This is class component</h1>
          <h5>3. Class Component</h5>
        <p>Counter: {counter}</p>
        {/* <p>Text: {text} </p> */}
        <button
        className="button"
        aria-label="Increment value"
        onClick={() => {this.props.increment()}}
      >
        +
      </button>

      </div>
    )
  }
}
function mapStateToProps(state) {
    const counter = state.counters.count;
    // const text = state.text;
    return {
      counter,
    //   text
    };
  }
  function mapDispatchToProps(dispatch){
    //   console.log(dispatch)
      return{
        increment: () => dispatch(increment()),
        
      }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Reference);
  
