import React, { Component } from "react";
import Tabs from "./common/rendertabs";

class Header extends Component {
  state = { menuOpen: "" };

  handleMenuBtn = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    const { menuOpen } = this.state;
    const { tabs } = this.props;

    return (
      <header>
        <img src="/asserts/icons/logo.svg" className="logo" alt="" />

        <img
          src="/asserts/icons/icon-hamburger.svg"
          className="menu-btn"
          alt=""
          onClick={this.handleMenuBtn}
        />

        <nav className={menuOpen ? "show" : ""}>
          <div className="bg"></div>

          <img
            src="/asserts/icons/icon-close.svg"
            className="close-btn"
            alt=""
            onClick={this.handleMenuBtn}
          />

          <Tabs tabs={tabs} />
        </nav>
      </header>
    );
  }
}

export default Header;
