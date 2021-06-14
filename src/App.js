import React , {useState , useEffect , useReducer} from 'react';
import './App.css';
import FormGiver from './component/FormBox/FormGiver';
import WrapperGiver from './component/WrapperBox/WrapperGiver';


function App() {

  async function fetcher(newMovie) {
    console.log(newMovie);
    await fetch("https://fir-http-request-46853-default-rtdb.firebaseio.com/newMovies.json" , {
      method : "POST",
      body : JSON.stringify(newMovie),
      headers : {'Content-Type' : 'application/json'}
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function addTheData(newMovie) {
    fetcher(newMovie);
  }

  return (

    <WrapperGiver className = "mainContainer">

          <FormGiver onformSubmit = {addTheData}/>
    
    
    </WrapperGiver>

  )

}

export default App;


