import { useEffect, useState } from 'react';

import * as api from '../api';

function useCommentsData(page) {
  const [comments, setComments] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    api.fetchComments(page).then(data => {
      setComments(data);
      setIsFetching(false);
    });
  }, [page]);

  return { comments, isFetching };
}

export default useCommentsData;
