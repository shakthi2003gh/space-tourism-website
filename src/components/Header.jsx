import React, { Component } from "react";
import Nav from "./common/renderNav";

class Header extends Component {
  state = { menuOpen: "" };

  handleMenuBtn = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    const { menuOpen } = this.state;
    const { tabs } = this.props;

    return (
      <header className="container">
        <img src="/assets/icons/logo.svg" className="logo" alt="" />

        <img
          src="/assets/icons/icon-hamburger.svg"
          className="menu-btn"
          alt=""
          onClick={this.handleMenuBtn}
        />

        <nav className={menuOpen ? "show" : ""}>
          <div className="bg"></div>

          <img
            src="/assets/icons/icon-close.svg"
            className="close-btn"
            alt=""
            onClick={this.handleMenuBtn}
          />

          <Nav tabs={tabs} onClick={this.handleMenuBtn} />
        </nav>
      </header>
    );
  }
}

export default Header;
