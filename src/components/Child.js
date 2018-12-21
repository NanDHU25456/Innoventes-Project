import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p> Child </p>
            </div>
            <div className="col-md-6 d-flex flex-row">
              <button
                type="button"
                class="btn btn-primary btn-number mr-1"
                disabled={this.props.childDecDisable && true}
                onClick={() => {
                  this.props.childDecrement();
                }}
              >
                Minus
              </button>
              <p>{this.props.child} </p>
              <button
                type="button"
                class="btn btn-danger btn-number ml-1"
                disabled={this.props.childIncDisable && true}
                onClick={() => {
                  this.props.childIncrement();
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Child;
