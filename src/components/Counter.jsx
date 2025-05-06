import React, { useState } from 'react';


function Counter() {

    let [counter, setCounter] = useState(0);

    function increaseCounter() {
        setCounter(counter += 1);
    }

    function decreaseCounter() {
        setCounter(counter -= 1);
    }

    return (
        <div>{counter}
            <button onClick={increaseCounter}>
                + 1
            </button>
            <button onClick={decreaseCounter}>
                - 1
            </button>
        </div>
    )

}

export default Counter;
