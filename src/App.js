import React from 'react';
import './App.css';
import Image from 'c:/glacier.jpg'
function App() {
    return (
        <div>
          <img src={Image} alt="Image" />
          <h1 style={{'text-align':'center'}}>Hello My name is Ryan Sulier this is my 2nd Web app in AWS.</h1> 
          <p style={{'text-align':'center'}}>If you like this send me a text at 650-743-1490</p>
           <storage/>
       </div>
    );
}
 
export default App;


