/// <reference path="typings/tsd.d.ts" />

class HelloMessage extends React.Component<{name: string}, {}> {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

ReactDOM.render(<HelloMessage name="John" />, document.getElementById('container'));
