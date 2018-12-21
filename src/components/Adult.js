import React, { Component } from "react";

class Adult extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p> Adult </p>
            </div>
            <div className="col-md-6 d-flex flex-row">
              <button
                type="button"
                class="btn btn-primary btn-number mr-1"
                disabled={this.props.adultDecDisable && true}
                onClick={() => {
                  this.props.adultDecrement();
                }}
              >
                Minus
              </button>
              <p>{this.props.adult} </p>
              <button
                type="button"
                class="btn btn-danger btn-number ml-1"
                disabled={this.props.adultIncDisable && true}
                onClick={() => {
                  this.props.adultIncrement();
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

export default Adult;
