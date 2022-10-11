import * as React from 'react';
import './TableDescription.styles.scss';

interface TableDescriptionProps {
  text?: string;
  children?: React.ReactNode;
}

const TableDescription: React.FC<TableDescriptionProps> = ({
  text,
  children,
}) => {
  return (
    <td className='table-description'>
      {text}
      {children}
    </td>
  );
};

export default TableDescription;
