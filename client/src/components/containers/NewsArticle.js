import React, {Component} from 'react';
import NewsItemDetail from '../presentation/NewsItemDetail';
import {connect} from 'react-redux';
import {fetchNewsItem} from '../../actions/actions';

class NewsArticle extends Component {
  componentDidMount() {
    this.props.dispatch(fetchNewsItem(this.props.match.params.id));
  }
  
  render() {

    return (
      <div>
        <h2>News Story</h2>
        <ul>
          {this.props.newsItemLoading ? <div>Loading...</div> : <NewsItemDetail data={this.props.newsItem} />}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    newsItem: state.news.newsItem,
    newsItemLoading: state.news.newsItemLoading
  }
}

export default connect(mapStateToProps)(NewsArticle);