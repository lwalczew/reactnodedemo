import React, {Component} from 'react';
import News from '../containers/News';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div> Welcome to MadOwlNews.com </div>
        <div>
          <News/>
        </div>
      </div>
    )
  }
}