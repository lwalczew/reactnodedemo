import actionTypes from '../constants/actionTypes';

function NewsItemReceived(newsItem) {
  return {
    type: actionTypes.NEWSITEM_RECEIVED,
    newsItem: newsItem
  }
}

function newsReceived(news) {
  return {
    type: actionTypes.NEWS_RECEIVED,
    news: news
  }
}

export function fetchNews(fakeNews) {
  console.log('presend');
  return dispatch => {
    return fetch('http://localhost:5000/news')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(e => console.log(e));
  }
}

export function fetchNewsItem(fakeNewsItem) {
  return dispatch => {
    dispatch(NewsItemReceived(fakeNewsItem));
  }
}