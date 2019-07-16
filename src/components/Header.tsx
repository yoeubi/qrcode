import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames/bind';
import styles from './Header.scss';

const cx = cn.bind(styles);

const Header: React.FunctionComponent<{}> = () => {
  return (
    <header className={cx('header')}>
      <h1>
        <Link to="/">
          <span className={cx('spr', 'logo')}>네이버</span>
        </Link>
        <Link to="/">
          <span className={cx('spr', 'link')}>예약</span>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
