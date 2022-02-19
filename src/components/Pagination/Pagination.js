import { PaginationWrapper, PageBtn, CurrentPage } from './Pagination.styled';
import { GrPrevious, GrNext } from 'react-icons/gr';

export function Pagination({
  total,
  page,
  onPrevPageBtnClick,
  onNextPageBtnClick,
}) {
  return (
    <PaginationWrapper>
      <PageBtn
        aria-label="Предыдущая страница"
        type="button"
        onClick={onPrevPageBtnClick}
        disabled={page === 1}
      >
        <GrPrevious />
      </PageBtn>
      <CurrentPage>{page}</CurrentPage>
      <PageBtn
        aria-label="Следующая страница"
        type="button"
        onClick={onNextPageBtnClick}
        disabled={page === total}
      >
        <GrNext />
      </PageBtn>
    </PaginationWrapper>
  );
}
