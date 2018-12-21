import React, { Component } from "react";
import Room from "./Room";
import Adult from "./Adult";
import Child from "./Child";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: 0,
      adult: 0,
      child: 0,
      roomIncDisable: false,
      roomDecDisable: false,
      adultIncDisable: false,
      adultDecDisable: false,
      childIncDisable: false,
      childDecDisable: false
    };
    this.roomIncrement = this.roomIncrement.bind(this);
    this.roomDecrement = this.roomDecrement.bind(this);
    this.adultIncrement = this.adultIncrement.bind(this);
    this.adultDecrement = this.adultDecrement.bind(this);
    this.childIncrement = this.childIncrement.bind(this);
    this.childDecrement = this.childDecrement.bind(this);
    this.incrementCheck = this.incrementCheck.bind(this);
    this.decrementCheck = this.decrementCheck.bind(this);
  }
  roomIncrement() {
    this.setState({ roomDecDisable: false });
    if (this.state.room !== 5) {
      this.setState(prevState => ({
        room: prevState.room + 1
      }));
    } else {
      this.setState({ roomIncDisable: true });
    }
    if (this.state.adult == 0) {
      this.setState({ adult: 1 });
    }
    this.incrementCheck();
  }
  roomDecrement() {
    this.setState({ roomIncDisable: false });
    if (this.state.room <= 1) {
      this.setState({ roomDecDisable: true, roomIncDisable: false });
    } else {
      this.setState(prevState => ({
        room: prevState.room - 1
      }));
    }
    this.decrementCheck();
  }

  adultIncrement() {
    this.setState({ adultDecDisable: false });
    const total = this.state.adult + this.state.child;
    const max = this.state.room * 4;
    if (this.state.adult >= max) {
      this.setState({ adultIncDisable: true });
    } else if (total < 1) {
      this.setState({ adult: 1 });
    } else if (total == max) {
      this.setState({ adultIncDisable: true });
    } else {
      this.setState(prevState => ({ adult: prevState.adult + 1 }));
    }
  }
  adultDecrement() {
    this.setState({ adultIncDisable: false });
    if (this.state.adult != 1) {
      this.setState(prevState => ({
        adult: prevState.adult - 1
      }));
    } else {
      this.setState({ adultDecDisable: true });
    }
  }
  childIncrement() {
    const max = this.state.room * 4 - this.state.adult;
    if (this.state.child >= max) {
      this.setState({ childIncDisable: true });
    } else {
      this.setState(prevState => ({
        child: prevState.child + 1
      }));
    }
    this.setState({ childDecDisable: false });
  }
  childDecrement() {
    this.setState({ childIncDisable: false });
    if (this.state.child < 0) {
      this.setState({ child: 0, childDecDisable: true });
    }
    if (this.state.child == 0) {
      this.setState({ childDecDisable: true, childIncDisable: false });
    } else {
      this.setState(prevState => ({
        child: prevState.child - 1
      }));
    }
  }
  incrementCheck() {
    const total = this.state.adult + this.state.child;
    const max = this.state.room * 4;
    if (max >= total) {
      this.setState({
        adultIncDisable: false,
        childIncDisable: false,
        adultDecDisable: false,
        childDecDisable: false
      });
    }
  }
  decrementCheck() {
    this.setState({ adultIncDisable: false, childIncDisable: false });
    if (this.state.child < 0) {
      this.setState({ child: 0 });
    }
    const total = this.state.adult + this.state.child;
    const max = this.state.room * 4;
    if (max == this.state.child) {
      this.setState({ child: 0 });
    }
    if (max <= total) {
      if (this.state.child == 0) {
        const temp = this.state.adult - max;
        this.setState(prevState => ({
          adult: prevState.adult - temp
        }));
      }
      if (this.state.child >= 1) {
        const temp = total - max;
        let abs = this.state.child - temp;

        if (abs > 0) {
          this.setState(prevState => ({
            child: prevState.child - temp
          }));
        } else {
          abs = Math.abs(abs);
          this.setState(prevState => ({
            child: prevState.child - abs,
            adult: prevState.adult - abs
          }));
          if (this.state.child < 0) {
            this.setState({ child: 0 });
          }
        }
      }
    }
  }
  render() {
    return (
      <div className="container mb-8">
        <Room
          room={this.state.room}
          roomIncDisable={this.state.roomIncDisable}
          roomDecDisable={this.state.roomDecDisable}
          roomIncrement={this.roomIncrement}
          roomDecrement={this.roomDecrement}
        />
        <Adult
          adult={this.state.adult}
          adultIncDisable={this.state.adultIncDisable}
          adultDecDisable={this.state.adultDecDisable}
          adultIncrement={this.adultIncrement}
          adultDecrement={this.adultDecrement}
        />
        <Child
          child={this.state.child}
          childIncDisable={this.state.childIncDisable}
          childDecDisable={this.state.childDecDisable}
          childIncrement={this.childIncrement}
          childDecrement={this.childDecrement}
        />
      </div>
    );
  }
}

export default Main;
