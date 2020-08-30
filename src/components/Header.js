import React from "react";
import { Link } from "react-router";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      isNavOpen: false
    };

    buttonClicked(){
      this.setState({
        isNavOpen : !this.state.isNavOpen
      })
    }

  }
  render() {
    console.log("RENDERİNG");
    return (
      <header>
        <nav className="container navbar navbar-expand-lg navbar-light justify-content-between">
          <a className="navbar-brand" href="#">
            Eğitimbudur
          </a>
          <button className="navbar-toggler" type="button" onClick={this.buttonClicked.bind(this)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse" style={{ display: this.state.isNavOpen ? "block" : "none" }}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/anasayfa"
                  activeClassName="active"
                  className="nav-link"
                >
                  Anasayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/hakkimizda"
                  activeClassName="active"
                  className="nav-link"
                >
                  Hakkımızda
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/iletisim"
                  activeClassName="active"
                  className="nav-link"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
