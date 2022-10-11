import * as React from 'react';
import './DetailsCategory.styles.scss';

interface DetailsCategoryProps {
  title: string;
  children: React.ReactNode;
}

const DetailsCategory: React.FC<DetailsCategoryProps> = ({
  title,
  children,
}) => {
  return (
    <div className='details-category'>
      <h3 className='details-category-title'>{title}</h3>
      {children}
    </div>
  );
};

export default DetailsCategory;
