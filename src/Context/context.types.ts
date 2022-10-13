export interface TableProps {
  children: React.ReactNode;
}

export interface UserObjectType {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
  id: '1';
  status: 'Active';
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
  users: UserObjectType[];
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
  setActiveTab: (active: string) => void;
  userDetails: UserObjectType;
}
