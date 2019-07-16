import React, { Component } from 'react';
import cn from 'classnames/bind';
import styles from './App.scss';
import Header from './components/Header';
const cx = cn.bind(styles);

class App extends Component<{}> {
  render() {
    return (
      <div className={cx('app')}>
        <Header />
        <div className={cx('content')}>
          <div>
            <a href="http://m.site.naver.com/0sVBx">
              <img src="https://qrcodethumb-phinf.pstatic.net/20190716_25/156321723791265XMF_PNG/0sVBx.png" />
            </a>
            <p>QR코드를 스캔해주세요.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
