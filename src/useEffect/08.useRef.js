import { useRef } from "react";

function App() {
    const inputRef = useRef();

    // setTimeout(() => {console.log(inputRef.current)}, 3000);
    
    setTimeout(() => {inputRef.current.focus()}, 3000);

    return (
        <div>
            <input ref={inputRef} placeholder="write..."/>
        </div>
    );
}

export default App;