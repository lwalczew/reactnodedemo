import React, {Component} from 'react';
import NewsItemListing from '../presentation/NewsItemListing';

export default class News extends Component {
  render() {
    return (
      <div>
        <h2> News Items </h2>
        <ul>
          <li><NewsItemListing id="1" title="Mad owl torments drivers" teaser="An owl is doing something." /></li>
          <li><NewsItemListing id="2" title="Owl steals post" teaser="An owl stole some mail." /></li>
        </ul>
      </div>
    )
  }
}