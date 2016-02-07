/// <reference path="typings/browser.d.ts" />

function value(e: React.FormEvent) {
    return (e.target as any).value;
}
class TodoList extends React.Component<{items: string[]}, {secondsElapsed: number}> {
    render() {
        const createItem = (itemText: any, index: any) => {
            return <li key={index + itemText}>{itemText}</li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
}

class TodoApp extends React.Component<{}, {items?: string[], text: string}> {
    constructor() {
        super();
        this.state = {items: [], text: ''};
    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    };
    render() {
        return (
          <div>
            <h3>TODO</h3>
            <TodoList items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
              <input onChange={(e: React.FormEvent)=>this.setState({text: value(e)})} value={this.state.text} />
              <button>{'Add #' + (this.state.items.length + 1)}</button>
            </form>
          </div>
        );
    }
}

ReactDOM.render(<TodoApp />, document.getElementById('container'));
