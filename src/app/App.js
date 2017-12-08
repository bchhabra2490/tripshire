import React from "react";
import {connect} from "react-redux"
import {change,reset} from './action';
import {Home} from './home';

class App extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <Home change = {()=>this.props.change()} value = {this.props.btn.value} reset = {()=>this.props.reset()}/>
            </div>
        );
    }
}

const mapStateToProps =  (state)=>{
    return {
        btn:state.btnReducer
    };
};

const mapDispatchToProps =  (dispatch)=>{
    return {
        change:()=>{
            dispatch(change());
        },
        reset:()=>{
            dispatch(reset());
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);