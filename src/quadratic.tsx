/// <reference path="typings/browser.d.ts" />

namespace quadratic {

function value(e: React.FormEvent) {
    return (e.target as any).value;
}

class QuadraticCalculator extends React.Component<{}, {a?: number, b?: number, c?: number}> {
    constructor() {
        super();
        this.state = { a: 1, b: 3, c: -4 };
    }

    render() {
        const a = this.state.a;
        const b = this.state.b;
        const c = this.state.c;
        const root = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
        const denominator = 2 * a;
        const x1 = (-b + root) / denominator;
        const x2 = (-b - root) / denominator;
        return (
          <div>
            <strong>
              <em>ax</em><sup>2</sup> + <em>bx</em> + <em>c</em> = 0
            </strong>
            <h4>Solve for <em>x</em>:</h4>
            <p>
              <label>
                a: <input type="number" value={String(a)} onChange={(e: React.FormEvent)=>this.setState({a: value(e)})} />
              </label>
              <br />
              <label>
                b: <input type="number" value={String(b)} onChange={(e: React.FormEvent)=>this.setState({b: value(e)})} />
              </label>
              <br />
              <label>
                c: <input type="number" value={String(c)} onChange={(e: React.FormEvent)=>this.setState({c: value(e)})} />
              </label>
              <br />
              x: <strong>{x1}, {x2}</strong>
            </p>
          </div>
        );
    }
}

ReactDOM.render(
  <QuadraticCalculator />,
  document.getElementById('container')
);

}
