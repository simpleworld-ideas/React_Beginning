import {useState} from 'react'

function NumberBox() {


    const [count, setCount] = useState(0);

    const increaseNumber = () => {
        // change the current value in the `count` variable
        // to be its current value + 1
        setCount(count + 1);
    }


    const decreasenumber = () => {
        // change the current value in the `count` variable
        // to be its current value + 1
        setCount(count - 1);
    }

    // return <div>

    //     <button onClick={increaseNumber}>Increase Button</button>
    // </div>
    

    return <div style={{
        "padding":"20px",
        "height":"150px",
        "width": "250px",
        "border":"1px solid black"
    }} >
        {count}

        <button style={{"padding":"10px", "margin":"5px"}} onClick={increaseNumber}>Increase Button</button>
        <button style={{"padding":"10px", "margin":"5px"}} onClick={decreasenumber}>Decrease Button</button>
    </div>
}

export default NumberBox;


//Math.floor(Math.random()*6)+1;