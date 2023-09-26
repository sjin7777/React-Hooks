import React from "react";

class App extends React.Component {
    state = {
        item: 0
    };

    incrementItem = () => {
        this.setState((state) => {
            return { item: state.item + 1 };
        });
    };
    decrementItem = () => {
        this.setState((state) => {
        return { item: state.item - 1 };
        });
    };

    render() {
        const { item } = this.state;

        return (
            <div className="App">
                <h1>Click Count: {item}</h1>

                <button onClick={this.incrementItem}>Increment</button>
                <button onClick={this.decrementItem}>Decrement</button>
            </div>
        );
    }
}

export default App;
