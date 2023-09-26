import { useState } from "react";

// 다른 function에서도 input 입력값에 대한 이벤트 처리 가능
// 기존 useInput + 유효성 검증 기능
const useInput = (initialValue, validator) => {
    const [keyword, setKeyword] = useState(initialValue);
    
    const onChange = (event) => {
        const {target: { value }} = event;
        let willUpdate = true;

        if(typeof validator === 'function') {
            willUpdate = validator(value);
        }

        if (willUpdate) {
            setKeyword(value);
        }

    };

    return { keyword, onChange };
};

function App() {
    // const maxLen = (value) => value.length <= 10;
    // const name = useInput("Mr.", maxLen);
    const includeVal = (value) => !value.includes("@");
    const name = useInput("Mr.", includeVal);

    return (
        <div className="App">
            <h1>Hello</h1>
            <input placeholder="Name" value={name.keyword} onChange={name.onChange} />
            {/* <input placeholder="Name" {...name} /> */}
        </div>
    );
}

export default App;
