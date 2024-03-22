import logo from './logo.svg';
import './App.css';
import spdhello from './spdhello.jpg'
import "./style.css"

function App() {
  return (
    <>
       <img src={spdhello}/>
        <h1> Hello World</h1>

        {1+1}
        <p>
          {Math.random() * 100 + 1}
        </p>
        <h2 style={{
          'backgroundColor':'green',
          'fontSize':'64px'
        }}>I love Chicken Rice</h2>
    </>
     
    
  );
}

export default App;
