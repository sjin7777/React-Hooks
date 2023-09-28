import { useRef, useEffect } from "react";

const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        // useEffect가 mount, update되었을 때 call
        if(element.current) {
            element.current.addEventListener("click", onClick);
        }
        // useEffect가 unmount될 때 call
        return () => {
            if(element.current) {
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []);
    return typeof onClick !== "function" ? undefined : element;
}

function App() {
    const sayHello = () => console.log('Hello');

    const title = useClick(sayHello);
    return (
        <div>
            <h1 ref={title}>Hi</h1>
        </div>
    );
}

export default App;