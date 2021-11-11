import React,{useState,useEffect} from 'react';
import axios from 'axios';
import CounterComponent from './Component/CounterComponent';
import CountervalueComponent from './Component/CountervalueComponent';
import "./App.css";

const App=()=>{
  
  const [count,setcounter]=useState(1); //state we are maintaing after each call 
  const [loader,setloader]=useState(false); //variable in boolean form for conditioning rendering of loader


  //For initializing the count state when the project  renders for the first time
  useEffect(()=>{

    // setting the state count variable after fetching count value from making GET api call
    axios.get(`https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/Shivam_Sharma.json`)
    .then((response)=>{
      console.log(response.data);
      if(response.data!==null){
        setcounter(response.data);
      }else{
        return setcounter(1);
      }
      setloader(true);
    })
    .catch((error)=>{
      console.log(error);
    });

    setloader(false);
  },[]);


  //For fetching the count value from api call whenever the project renders and state count value changes
  //here we are also updating loader so that loader can be seen after backend changes
  useEffect(()=>{
    axios.get(`https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/Shivam_Sharma.json`)
    .then((response)=>{
      setloader(true);
    })
    .catch((error)=>{
      console.log(error);
    });
    setloader(false);
  },[count]);

  //object that we send for updating data in backend
  const data={
    Shivam_Sharma:count
  }
  
  //event handler for decrement operation where we update the state count variable and send the object to backend
  const decrementHandler=(e)=>{
    data.Shivam_Sharma=count>1?count-1:count;
    setcounter(data.Shivam_Sharma);
      axios.put(' https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json',data)
      
  }

  //event handler for increment operation where we update the state count variable and send the object to backend
  const incrementHandler=(e)=>{
    data.Shivam_Sharma=count<1000?count+1:count;
    setcounter(data.Shivam_Sharma);
    //Updating value of counter through Api call
    axios.put(' https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json',data)
  }

  //event handler for whenever we type into the input box
  const inputHandler=(e)=>{
    let input;// variable for storing the outcome from the input box

    //converting the string text from the user to integer
    if(e.target.value!==""){
      input=(parseInt(e.target.value)>1000?1000:parseInt(e.target.value));
        setcounter(prev=>(parseInt(e.target.value)>1000?1000:parseInt(e.target.value)));
    }
    //if we get nothing in the input we initialize it to 1
    else{
      input=1;
      setcounter(1);
    }
    data.Shivam_Sharma=input;
    //Updating value of counter through Api call
    axios.put(' https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json',data)

  }

  return(
    <>
    <div className="container" >
      <CounterComponent loader={loader}counter={count} decrement={decrementHandler} increment={incrementHandler} inputHandler={inputHandler}/>
      <CountervalueComponent counter={count} />
    </div>
    </>
  )
}

export default App;