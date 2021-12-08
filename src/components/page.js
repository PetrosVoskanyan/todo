import { Component } from 'react';
import { Header } from './Header/header';

export class Page extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="page-content">

        </div>
      </div>
    )
  }
}
