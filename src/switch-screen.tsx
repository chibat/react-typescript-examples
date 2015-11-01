/// <reference path="typings/tsd.d.ts" />

class Header extends React.Component<{}, {}> {
    dispScreen1 = () => {
        ReactDOM.render(<Screen1 />, document.getElementById('main'));
    }
    dispScreen2 = () => {
        ReactDOM.render(<Screen2 />, document.getElementById('main'));
    }
    render() {
        this.dispScreen1();
        return (
            <div>
                <a href="#" onClick={this.dispScreen1}>Screen1</a> | <a href="#" onClick={this.dispScreen2}>Screen2</a>
            </div>
        );
    }
}

class Screen1 extends React.Component<{}, {}> {
    render() {
        return <div>Screen1</div>;
    }
    componentWillUnmount() {
        alert('called componentWillUnmount - Screen1');
    }
}
class Screen2 extends React.Component<{}, {}> {
    render() {
        return <div>Screen2</div>;
    }
    componentWillUnmount() {
        alert('called componentWillUnmount - Screen2');
    }
}

ReactDOM.render(<Header />, document.getElementById('header'));
