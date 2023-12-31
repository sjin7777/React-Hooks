import { useState, useEffect } from "react";

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });

    const onScroll = () => { 
        console.log(`x: ${window.scrollX}, y: ${window.scrollY}`);
        
        setState({ x: window.scrollX, y: window.scrollY });
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        
        return() => {
            window.removeEventListener("scroll", onScroll);
        }
    })
    return state;
}

function App() {
    const {y} = useScroll();

    return (
        <div style={{ height: "1000vh" }}>
            <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
        </div>
    );
}

export default App;