import React from "react";
import "./CountervalueComponent.css";

//here we hav second component with fetching data in real time and updating using props in compoent
const CountervalueComponent=(prop)=>{
    return(
        <>
            <div className="content2" >
                <span style={{fontWeight:"bold", fontSize:20 }}> Counter value 
                <h4 id="box2"> {prop.counter} </h4>
                </span>
            </div>
        </>
    )
}

export default CountervalueComponent;