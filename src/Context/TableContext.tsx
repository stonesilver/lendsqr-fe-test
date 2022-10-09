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
  const { ref, visible, setVisible } = useClickOutside();

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
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableContext;
