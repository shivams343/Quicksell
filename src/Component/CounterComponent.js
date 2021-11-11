import React from "react";
import './CounterComponent.css'
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

//here we have loader with conditional rendering and first component with input, increment and decrement operation. 
const CounterComponent=(prop)=>{
    return(
        <>
        <span className="loadercss">{(prop.loader || prop.counter===1)?(<p></p>):(<div><Spinner animation="border" size="sm" />Saving counter data</div>)}</span>
        <div className="content1">
            <button className="leftbox" onClick={prop.decrement} style={{display : 'inline-block'}} >-</button>
            <input className="inputbox" style={{textAlign:"center"}} size="1" value={prop.counter} type="text" onChange={prop.inputHandler}/>
            <button className="rightbox" onClick={prop.increment} style={{display : 'inline-block'}}>+</button>
        </div>
        </>
    )
}

export default CounterComponent;