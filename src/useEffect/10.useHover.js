import { useRef, useEffect } from "react";

const useHover = (onHover) => {
    const element = useRef();
    useEffect(() => {
        // useEffect가 mount, update되었을 때 call
        if(element.current) {
            element.current.addEventListener("mouseenter", onHover);
        }
        // useEffect가 unmount될 때 call
        return () => {
            if(element.current) {
                element.current.removeEventListener("mouseenter", onHover);
            }
        };
    }, []);
    return typeof onHover !== "function" ? undefined : element;
}

function App() {
    const sayHello = () => console.log('Hello');

    const title = useHover(sayHello);
    return (
        <div>
            <h1 ref={title}>Hi</h1>
        </div>
    );
}

export default App;