/// <reference path="typings/tsd.d.ts" />

class Timer extends React.Component<{}, {secondsElapsed: number}> {
    interval: number;
    constructor() {
        super();
        this.state = {secondsElapsed: 0};
    }
    private tick = () => {
        this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    }
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
          <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        );
    }
};

ReactDOM.render(<Timer />, document.getElementById('container'));
