import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
    if(typeof onBefore !== "function");

    // const handleLeave = () => onBefore();
    const handleLeave = (event) => {
        const { clientY } = event;
        if(clientY <= 0) { onBefore(); }
    }


    useEffect(() => {
        // Component가 mount 되었는데 마우스가 document를 벗어났을 때 handleLeave 함수 실행 
        document.addEventListener("mouseleave", handleLeave);
        return () => {
            // componentWillUnmount 일 때 handleLeave 함수 제거
            document.removeEventListener("mouseleave", handleLeave);
        }
    // 빈 배열([])로 설정함으로써 Event가 document에 계속 추가되는걸 막고, 단 한번만 실행되게 해줌
    }, [])
}

function App() {
    const begForLife = () => console.log("Plz dont leave");

    useBeforeLeave(begForLife);

    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
}

export default App;