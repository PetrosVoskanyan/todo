import { Component } from 'react';
import { ReactComponent as LogoSvg } from '../../assets/Images/logo.svg';
import PatchStyles from 'patch-styles';
import * as classes from './header.models.scss';

export class Header extends Component {
  render() {
    return (
      <PatchStyles classNames={classes}>
        <div className="Header">
          <div className="Logo">
            <LogoSvg />
          </div>
        </div>
      </PatchStyles>
    );
  }
}
