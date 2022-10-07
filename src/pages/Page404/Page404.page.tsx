import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from 'assets/svg/home.svg';
import './Page404.styles.scss';

const Page404 = () => {
  return (
    <div className='page-not-found'>
      <img
        src='/img/comrade.webp'
        alt='comrade'
        className='page-not-found-img'
      />
      <p className='page-not-found-text'>
        Comrade this page is under development. Please check back later or go
        home!!!
      </p>
      <Link to='/users' className='page-not-found-home-btn'>
        <HomeIcon className='page-not-found-home-btn-icon' /> Home
      </Link>
    </div>
  );
};

export default Page404;
