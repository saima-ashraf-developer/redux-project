import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../Store/actions/actionsTypes';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../Store/actions/index';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                return
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onincrementcounter} />
                <CounterControl label="Decrement" clicked={this.props.ondecrementcounter}  />
                <CounterControl label="Add 5" clicked={this.props.onadditioncounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onsubtractioncounter}  />
                <hr />
                <button onClick={()=>this.props.onstoreresults(this.props.ctr)}>Store Results</button>
                <ul>
                    {this.props.results.map(result=>
                   (<li key={result.id} onClick={()=>this.props.ondeleteresults(result.id)}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
const mapstateToProps=(state)=>{
    
    return{
        ctr: state.ctr.counter,
        results: state.res.storeResults
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        onincrementcounter: () =>dispatch(actionCreators.increment()),
        ondecrementcounter: () =>dispatch(actionCreators.decrement()),
        onadditioncounter: () =>dispatch(actionCreators.add(5)),
        onsubtractioncounter: () =>dispatch(actionCreators.subtract(5)),
        onstoreresults: (result)=>dispatch(actionCreators.storeResults(result)),
        ondeleteresults:(id)=>dispatch(actionCreators.deleteResults(id))
    }
}
export default connect(mapstateToProps,mapDispatchToProps)(Counter);