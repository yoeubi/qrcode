import React, { Component } from 'react';
import cn from 'classnames/bind';
import styles from './App.scss';
const cx = cn.bind(styles);

class App extends Component<{}> {
  render() {
    return (
      <div className={cx('app')}>
        <div className={cx('card')}>
          <h1>NAVER CAFE</h1>
          <h2>커피한잔의 여유 :D</h2>
          <div className={cx('qrcode')}>
            <a href="http://m.site.naver.com/0sYtl">
              <img src="https://qrcodethumb-phinf.pstatic.net/20190718_285/1563442067134md0MR_PNG/0sYtl.png" />
            </a>
          </div>
          <p>스캔하고, 주문하고, 결제완료!</p>
        </div>
      </div>
    );
  }
}

export default App;
