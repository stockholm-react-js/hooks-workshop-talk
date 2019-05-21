import Button from './Button';
import usePagination from '../hooks/pagination';

const pages = [
  ({ onNext }) => <Button onClick={onNext}>Intro</Button>,
  ({ onNext }) => <Button onClick={onNext}>Mid</Button>,
  ({ onNext }) => <Button onClick={onNext}>Outro</Button>,
];

function Pagination() {
  const { Page, onNext, onPrev, page } = usePagination(
    pages,
    () => window.alert('Completed!')
  );
  return (
    <div>
      <Page onNext={onNext} onPrev={onPrev} />
      <div>{page} / {pages.length}</div>
    </div>
  );
}

export default Pagination;
