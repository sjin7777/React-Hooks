import React, { useState } from "react";

function App() {
    const [item, setItem] = useState(0);

    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);

    return (
        <div className="App">
            <h1>Click Count: {item}</h1>

            <button onClick={incrementItem}>Increment</button>
            <button onClick={decrementItem}>Decrement</button>
        </div>
    );
}

export default App;
