import React from "react"
export const Home = (props)=> {
    let text = "Start";
    console.log(props.value)
    if(props.value){
        text="Start"
    }else{
        text = "Stop"
    }
    return (
        <div className="row">
            <div className="col-xs-12">
                <button
                    className="btn btn-primary"
                    onClick={() => props.change()}>{text}</button>
                <button
                    className="btn btn-primary" style={{marginLeft:10}}
                    onClick={() => props.reset()}>Reset</button>    
            </div>
        </div>
    );
}