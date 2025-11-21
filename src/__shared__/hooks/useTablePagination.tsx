import { parseAsInteger, useQueryState } from 'nuqs';

export const useTablePagination = () => {
  const [page, setPage] = useQueryState(
    'page',
    parseAsInteger.withDefault(1).withOptions({
      clearOnDefault: false,
    }),
  );

  const [size, setSize] = useQueryState(
    'size',
    parseAsInteger.withDefault(10).withOptions({
      clearOnDefault: false,
    }),
  );

  const onPageChange = (_page: number, _pageSize: number) => {
    setPage(_page);
    setSize(_pageSize);
  };

  return {
    page,
    size,
    onPageChange,
  };
};
