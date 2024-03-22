function displayHeader(){
  return (<h1>About Me</h1>)
}

function Shout(props) {
  console.log(props.msg);
  return <div style={{
    backgroundColor:props.bgcolor,
    padding:"10px",
    marginTop:"5px",
    marginBottom:"5px",
    color:"white"
  }}>
    {props.msg}
  </div>
}

function Hello(props){
  return<div>
    {props.msg}
  </div>
}

function SumOfTwo(props){

  return <div>
  {props.number1} + {props.number2} = {props.number3 + props.number4} <br></br>
  {props.number3 + props.number4}
  </div>

}


function App() {
  return (
   <>
   {displayHeader()}
   <Shout msg="Be careful of wet floor" bgcolor="green"/>

   <SumOfTwo number1={7} number2={3}/>
   <Hello msg= "Hello WOrld"/>
   <Hello msg= "Today WOrld"/>
   <SumOfTwo number3={55} number4={45}/>
   </>
  );
}

export default App;
