import React, { Component } from "react";
class Pannel extends Component {
  state = {};
  onSubmit = e => {
    e.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
      e.target.reset();
    }
  };

  onChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="panel-heading">
          <h2>Contacts</h2>
        </div>
        <div className="panel-body">
          <form
            onSubmit={e => {
              this.onSubmit(e);
            }}
          >
            <div className="input-group ">
              <input
                type="text"
                ref={ref => (this.input = ref)}
                onChange={e => {
                  this.onChange(e);
                }}
                className="form-control"
                style={{ fontSize: 15 }}
                placeholder="Enter Name Here"
              />

              <button type="submit" className="btn btn-success">
                Add
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Pannel;
