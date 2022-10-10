import * as React from 'react';
import { useClickOutside } from 'Hooks/useClickOutside';

interface TableProps {
  children: React.ReactNode;
}

interface ContextProps {
  showFilter: () => void;
  closeFilter: () => void;
  resetFilterData: () => void;
  ref: any;
  visible: boolean;
  filterData: FilterInterface;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectChange: (name: string, value: string) => void;
  currentPage: number;
  currentTableData: string[];
  onPageChange: (page: number) => void;
  pageSize: number;
  data: string[];
  changePageSize: (pageSize: number) => void;
}

interface FilterInterface {
  organisation: string;
  username: string;
  email: string;
  date: string;
  phone: string;
  status: string;
}

const TableContext = React.createContext({} as ContextProps);

const initData: FilterInterface = {
  organisation: '',
  username: '',
  email: '',
  date: '',
  phone: '',
  status: '',
};

const str = 'jsdkjskdjjshdjskdjkhwgjewgwehjwjgjdjvdjvdjdjhsjdvjhdvj'.split('');
let data: string[] = [...str];

export const TableProvider: React.FC<TableProps> = ({ children }) => {
  const [filterData, setFilterData] = React.useState<FilterInterface>(initData);
  const { ref, visible, setVisible } = useClickOutside();
  const [pageSize, setPageSize] = React.useState<number>(2);

  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const currentTableData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const changePageSize = (pageSize: number) => {
    setPageSize(pageSize);
  };

  const showFilter = () => {
    setVisible(true);
  };

  const closeFilter = () => {
    setVisible(false);
  };

  const resetFilterData = () => {
    setFilterData(initData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilterData((prevS) => ({ ...prevS, [name]: value }));
  };

  const selectChange = (name: string, value: string) => {
    setFilterData((prevS) => ({ ...prevS, [name]: value }));
  };

  return (
    <TableContext.Provider
      value={{
        showFilter,
        ref,
        filterData,
        handleChange,
        selectChange,
        visible,
        closeFilter,
        resetFilterData,
        currentPage,
        currentTableData,
        onPageChange,
        pageSize,
        data,
        changePageSize,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableContext;
