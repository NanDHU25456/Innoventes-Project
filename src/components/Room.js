import React, { Component } from "react";

class Room extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p> Room </p>
            </div>
            <div className="col-md-6 d-flex flex-row">
              <button
                type="button"
                class="btn btn-primary btn-number mr-1"
                disabled={this.props.roomDecDisable && true}
                onClick={() => {
                  this.props.roomDecrement();
                }}
              >
                Minus
              </button>
              <p> {this.props.room} </p>
              <button
                type="button"
                className="btn btn-danger btn-number ml-1"
                disabled={this.props.roomIncDisable && true}
                onClick={() => {
                  this.props.roomIncrement();
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

export default Room;
