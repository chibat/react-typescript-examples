/// <reference path="typings/tsd.d.ts" />

class Counter extends React.Component<{}, {clickCount: number}> {
    constructor() {
        super();
        this.state = {clickCount: 0};
    }
    handleClick = () => {
        this.setState({clickCount: this.state.clickCount + 1});
    }
    render() {
        return (
            <h2 onClick={this.handleClick}>Click me! Number of clicks: {this.state.clickCount}</h2>
        );
    }
};

ReactDOM.render(
    <Counter />,
    document.getElementById('message')
);
