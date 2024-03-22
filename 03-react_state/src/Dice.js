import {useState} from 'react'

export default function Dice() {

    const [count, setCount] = useState(0);

    const randomNum = () => {
        // change the current value in the `count` variable
        // to be its current value + 1
        setCount(Math.floor(Math.random()*6)+1);
    }


    return <div style={{
        "padding":"20px",
        "height":"50px",
        "width": "50px",
        "border":"1px solid black"
    }} onClick={randomNum}>
        {count}

    </div>
}
