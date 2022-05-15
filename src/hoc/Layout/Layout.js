import React, { Component } from "react";
import Aux from "../Auxillary/Auxillary";
import "./layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  SideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  SideDrawerToggleHandler = () => {
    this.setState((prev) => {
      return { showSideDrawer: !prev.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar
          isAuth={this.props.isAuthenticate}
          drowerToggleClicked={this.SideDrawerToggleHandler}
        />
        <SideDrawer
          isAuth={this.props.isAuthenticate}
          open={this.state.showSideDrawer}
          closed={this.SideDrawerClosedHandler}
        />
        <main className="Content"> {this.props.children} </main>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticate: state.auth.token !== null,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

export default connect(mapStateToProps)(Layout);
