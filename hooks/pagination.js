import { useCallback, useState } from 'react';

function usePagination(pages, onComplete) {
  const [page, setPage] = useState(1);
  const isLastPage = page === pages.length;

  const onNext = useCallback(() => {
    if (isLastPage) {
      return onComplete();
    }
    return setPage(prevPage => prevPage + 1);
  }, [isLastPage, onComplete]);

  return { Page: pages[page - 1], onNext, page };
}

export default usePagination;
