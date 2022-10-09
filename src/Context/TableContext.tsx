import * as React from 'react';
import {useClickOutside} from 'Hooks/useClickOutside'

interface TableProps {
  children: React.ReactNode;
}

interface ContextProps {
  open: boolean;
  showFilter: () => void;
  hideFilter: () => void;
  ref: any;
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

export const TableProvider: React.FC<TableProps> = ({ children }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [filterData, setFilterData] = React.useState<FilterInterface>({
    organisation: '',
    username: '',
    email: '',
    date: '',
    phone: '',
    status: '',
  });
  const ref = React.useRef<HTMLDivElement>(null);

  const showFilter = () => {
    setOpen(true);
    setTimeout(() => {
      ref.current && ref.current.focus();
    }, 100);
  };

  const hideFilter = () => {
    // setOpen(false);
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
        open,
        showFilter,
        hideFilter,
        ref,
        filterData,
        handleChange,
        selectChange,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableContext;
