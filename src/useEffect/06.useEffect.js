import { useState, useEffect } from "react";

function App() {
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);

    /* Component 생성, 업뎃, 사라지기 직전 모든 순간에 해당 함수 실행 */
    const sayHello = () => console.log('Hello');
    // useEffect(() => {sayHello()});
    useEffect(sayHello);


    /* Component 생성시에만 해당 함수 실행 */
    const sayHi = () => console.log('Hi');
    // useEffect(()=> {sayHi()}, []);
    useEffect(sayHi, []);
    

    /* Component 생성, array 안에 들어있는 데이터 업뎃 시 해당 함수 실행 */
    const sayUpdate = () => console.log('Update');
    // useEffect(() => {sayUpdate()}, [number]);
    useEffect(sayUpdate, [number]);


    /* Component 생성, array 안에 들어있는 데이터들 중 하나라도 업뎃 시 해당 함수 실행 */
    const sayUpdate2 = () => console.log('Update222222');
    // useEffect(() => {sayUpate2()}, [number, aNumber]);
    useEffect(sayUpdate2, [number, aNumber]);


    return(
        <div>
            <button onClick={() => setNumber(number + 1)}>{number}</button>
            <button onClick={() => setAnumber(aNumber - 1)}>{aNumber}</button>
        </div>
    )
}

export default App;