import { useState } from 'react'


import './App.css'
function App() {
  const [message,setMessage]=useState('Ceci est le corps de mon app');

  return (
    <div className="app">
     <h1>Mon titre:Mes premiers pas en developpement React</h1> 
     <h2>Le developpement:c'est serieux!</h2>
     <p>{"Soyons Zen!"}</p>
     <button onClick={()=>setMessage('Bouton cliqué!')}>Clic-me!</button>
      
       </div>
    
    
  );
}export default App;