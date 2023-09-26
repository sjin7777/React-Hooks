
const content = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1",
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2",
    }
];


function App() {
    return (
        <div>
            {content.map((section, index) => <button key={index}>{section.tab}</button>)}
        </div>
    );
}

export default App;