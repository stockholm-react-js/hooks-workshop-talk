import React, { Component } from 'react';

import Button from './Button';
import * as api from '../api';

class CommentsWithData extends Component {
  state = { page: 1, comments: [], isFetching: false }

  componentDidMount() {
    this.fetchComments(this.state.page);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.page !== prevState.page) {
      this.fetchComments(this.state.page);
    }
  }

  componentWillUnmount() {
    this.currentRequest = null;
  }

  fetchComments = (page) => {
    this.setState({ isFetching: true });
    let request = api.fetchComments(page);
    this.currentRequest = request;

    request.then(data => {
      if (this.currentRequest === request) {
        this.setState({ comments: data, isFetching: false });
      }
    });
  }

  render() {
    const { isFetching, page, comments } = this.state;
    return (
      <div>
        <Button onClick={() => this.setState({ page: page + 1 })}>
          Load page {page + 1}
        </Button>
        {comments.length === 0 && isFetching
          ? <div>Loading...</div>
          : <ul>{comments.map(({ id, text }) => <li key={id}>{text}</li>)}</ul>}
      </div>
    );
  }
}

export default CommentsWithData;
