import "./style.css"
import NumberBox from "./NumberBox";
import AlertBox from "./AlertBox";
import Dice from "./Dice";

import {useState} from 'react';

export default function App() {

  const [number, setNumber] = useState(0);
  return (
    <>
    <h1>State Examples</h1>
    {number}
    <div>
      <NumberBox/>
    </div>
    <div>
    <Dice/>
    </div>
    
    <AlertBox defaultMessage="Danger Ahead"/>
    </>
  );
}

