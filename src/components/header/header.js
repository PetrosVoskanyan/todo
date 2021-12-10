import { Component } from 'react';
import { ReactComponent as LogoSvg } from '../../assets/Images/logo.svg';
import './header.scss';

export class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Logo">
          <LogoSvg />
        </div>
      </div>
    );
  }
}
