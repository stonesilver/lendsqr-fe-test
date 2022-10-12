export interface TableProps {
  children: React.ReactNode;
}

export interface ContextProps {
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
  isMobile: boolean;
  showHamburger: boolean;
  toggleHamburger: () => void;
}

export interface FilterInterface {
  organisation: string;
  username: string;
  email: string;
  date: string;
  phone: string;
  status: string;
}

export interface UserDetailProviderProps {
  children: React.ReactNode;
}

export interface contextProps {
  activeTab: string;
  changeActiveTab: (tab: string) => void;
}
