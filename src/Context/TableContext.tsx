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
  ref1: any;
  visible: boolean;
  filterData: FilterInterface;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectChange: (name: string, value: string) => void;
  currentPage: number;
  currentTableData: {}[];
  onPageChange: (page: number) => void;
  pageSize: number;
  changePageSize: (pageSize: number) => void;
  users: {}[];
  loading: boolean;
  error: boolean;
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

export const TableProvider: React.FC<TableProps> = ({ children }) => {
  const [filterData, setFilterData] = React.useState<FilterInterface>(initData);
  const { ref, ref1, visible, setVisible } = useClickOutside();
  const [pageSize, setPageSize] = React.useState<number>(15);
  const [users, setUsers] = React.useState<{}[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const currentTableData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, users]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const changePageSize = (pageSize: number) => {
    setPageSize(pageSize);
  };

  const showFilter = () => {
    setVisible((prevS) => !prevS);
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

  // useEffect to fetch users
  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`${process.env.REACT_APP_API}`);
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <TableContext.Provider
      value={{
        showFilter,
        ref,
        ref1,
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
        changePageSize,
        users,
        loading,
        error,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableContext;
