import * as React from 'react';

interface TableProps {
  children: React.ReactNode;
}

interface ContextProps {
  open: boolean;
  showFilter: () => void;
  hideFilter: () => void;
  ref: any;
}

const TableContext = React.createContext({} as ContextProps);

export const TableProvider: React.FC<TableProps> = ({ children }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const showFilter = () => {
    setOpen(true);
    setTimeout(() => {
      ref.current && ref.current.focus();
    }, 100);
  };

  const hideFilter = () => {
    setOpen(false);
  };

  return (
    <TableContext.Provider value={{ open, showFilter, hideFilter, ref }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableContext;
