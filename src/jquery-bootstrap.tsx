/// <reference path="typings/tsd.d.ts" />

// Simple pure-React component so we don't have to remember
// Bootstrap's classes
class BootstrapButton extends React.Component<{className: string, onClick: ()=>void}, {}> {
  render() {
    return (
      <a {...this.props}
        href="javascript:;"
        role="button"
        className={(this.props.className || '') + ' btn'} />
    );
  }
}

class BootstrapModal extends React.Component<
    {confirm: string, cancel: string, title: string, onCancel: ()=>void, onConfirm: ()=>void, ref: string, children?: React.ReactChildren}, {}> {

    // The following two methods are the only places we need to
    // integrate Bootstrap or jQuery with the components lifecycle methods.
    componentDidMount() {
        // When the component is added, turn it into a modal
        $(this.refs['root']).modal({backdrop: 'static', keyboard: false, show: false});
    };

    close = () => $(this.refs['root']).modal('hide');

    open = () => $(this.refs['root']).modal('show');

    private handleCancel = () => {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
    };

    private handleConfirm = () => {
        if (this.props.onConfirm) {
            this.props.onConfirm();
        }
    };

    render() {
        return (
      <div className="modal fade" ref="root">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                onClick={this.handleCancel}>
                &times;
              </button>
              <h3>{this.props.title}</h3>
            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
            <div className="modal-footer">
              {this.props.cancel ? (
                  <BootstrapButton onClick={this.handleCancel} className="btn-default">
                  {this.props.cancel}
                  </BootstrapButton>
                  ) : null
              }
              {
                this.props.confirm ? (
                    <BootstrapButton
                      onClick={this.handleConfirm}
                      className="btn-primary">
                      {this.props.confirm}
                    </BootstrapButton>
                    ): null
              }
            </div>
          </div>
        </div>
      </div>
      );
    }
}

class Example extends React.Component<{}, {}> {
    private handleCancel = () => {
        if (confirm('Are you sure you want to cancel?')) {
            (this.refs['modal'] as BootstrapModal).close();
        }
    };
    private openModal = () => {
        (this.refs['modal'] as BootstrapModal).open();
    };
    private closeModal = () => {
        (this.refs['modal'] as BootstrapModal).close();
    }
    render() {
        return (
          <div className="example">
            <BootstrapModal
                ref="modal"
                confirm="OK"
                cancel="Cancel"
                onCancel={this.handleCancel}
                onConfirm={this.closeModal}
                title="Hello, Bootstrap!">
                  This is a React component powered by jQuery and Bootstrap!
            </BootstrapModal>
            <BootstrapButton onClick={this.openModal} className="btn-default">
              Open modal
            </BootstrapButton>
          </div>
        );
    };
}

ReactDOM.render(<Example />, document.getElementById('jqueryexample'));
