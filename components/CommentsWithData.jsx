import React, { useState } from 'react';

import Button from './Button';
import useCommentsData from '../hooks/comments-data';

function CommentsWithData() {
  const [page, setPage] = useState(1)
  const { comments, isFetching } = useCommentsData(page);

  return (
    <div>
      <Button onClick={() => setPage(page + 1)}>
        Load page {page + 1}
      </Button>
      {comments.length === 0 && isFetching
        ? <div>Loading...</div>
        : <ul>{comments.map(({ id, text }) => <li key={id}>{text}</li>)}</ul>}
    </div>
  );
}

export default CommentsWithData;
