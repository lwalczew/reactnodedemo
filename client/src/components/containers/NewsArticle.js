import React, {Component} from 'react';
import NewsItemDetail from '../presentation/NewsItemDetail';
import {connect} from 'react-redux';
import {fetchNewsItem} from '../../actions/actions';

class NewsArticle extends Component {
  componentDidMount() {
    let fakeNewsItem = {
      id: 1,
      title: 'Mad owl chases car',
      teaser: 'Mad Owl seen tormenting drivers in Morecambe',
      body: 'Yesterday and owl chased a car. It was AWESOME.'
    };

    this.props.dispatch(fetchNewsItem(fakeNewsItem));
  }
  
  render() {
    let {newsItem} = this.props;
    
    return (
      <div>
        <h2>News Story</h2>
        <ul>
          {newsItem ? <NewsItemDetail data={newsItem} /> : null}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    newsItem: state.news.newsItem
  }
}

export default connect(mapStateToProps)(NewsArticle);