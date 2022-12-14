import * as React from 'react';
import { useClickOutside } from 'Hooks/useClickOutside';
import { useMediaQuery } from 'Hooks/useMediaQuery';
import {
  TableProps,
  ContextProps,
  FilterInterface,
  UserObjectType,
} from './context.types';

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
  const [users, setUsers] = React.useState<UserObjectType[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);
  const [showHamburger, setShowHamburger] = React.useState<boolean>(false);
  const isMobile = useMediaQuery();

  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const currentTableData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, users]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const toggleHamburger = () => {
    setShowHamburger((prevS) => !prevS);

    setTimeout(() => {
      if (!showHamburger && isMobile) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }, 100);
  };

  const changePageSize = (pageSize: number) => {
    setPageSize(pageSize);
    setCurrentPage(1);
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
    // predictive status logic
    const userStatus = () => {
      const number = Math.round(Math.random() * 4);

      return number === 1
        ? 'Inactive'
        : number === 2
        ? 'Pending'
        : number === 3
        ? 'Blacklisted'
        : 'Active';
    };

    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`${process.env.REACT_APP_API}`);
        const data = await res.json();
        const newData = await data?.map((user: any) => ({
          ...user,
          status: userStatus(),
        }));
        setUsers(newData);
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
        isMobile,
        showHamburger,
        toggleHamburger,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableContext;
