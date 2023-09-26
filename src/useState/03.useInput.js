import { useState } from "react";

// 다른 function에서도 input 입력값에 대한 이벤트 처리 가능
const useInput = (initialValue) => {
    const [keyword, setKeyword] = useState(initialValue);
    
    // const onChange = (event) => setKeyword(event.target.value);
    const onChange = (event) => {
        const {
            target: { value }
        } = event;
        setKeyword(value);
    };

    return { keyword, onChange };
};


function App() {
    const name = useInput("Mr.");

    return (
        <div className="App">
            <h1>Hello</h1>
            {/* <input placeholder="Name" value={name.keyword} onChange={name.onChange} /> */}
            <input placeholder="Name" {...name} />
        </div>
    );
}

export default App;
