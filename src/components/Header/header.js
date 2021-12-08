import { Component } from 'react';
import { ReactComponent as LogoSvg } from '../../assets/Images/logo.svg';
import "./header.scss";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <LogoSvg />
        </div>
      </div>
    )
  }
}
