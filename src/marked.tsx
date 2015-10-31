/// <reference path="typings/tsd.d.ts" />

class MarkdownEditor extends React.Component<{}, {value: string}> {
    constructor() {
        super();
        this.state = {value: 'Type some *markdown* here!'};
    }
    private handleChange = () => {
        this.setState({value: (this.refs['textarea'] as any).value});
    };
    private rawMarkup = () => {
        return { __html: marked(this.state.value, {sanitize: true}) };
    };
    render() {
        return (
          <div className="MarkdownEditor">
            <h3>Input</h3>
            <textarea
              onChange={this.handleChange}
              ref="textarea"
              defaultValue={this.state.value} />
            <h3>Output</h3>
            <div
              className="content"
              dangerouslySetInnerHTML={this.rawMarkup()}
            />
          </div>
        );
    }
}

ReactDOM.render(<MarkdownEditor />, document.getElementById('container'));
