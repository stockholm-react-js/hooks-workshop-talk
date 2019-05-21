import { useEffect, useState } from 'react';

import * as api from '../api';

function useCommentsData(page) {
  const [comments, setComments] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    setIsFetching(true);
    api.fetchComments(page).then(data => {
      if (!isCancelled) {
        setComments(data);
        setIsFetching(false);
      }
    });
    return () => { isCancelled = true };
  }, [page]);

  return { comments, isFetching };
}

export default useCommentsData;
