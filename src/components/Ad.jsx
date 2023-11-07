// import React, { Component } from 'react';

// class Ad extends Component {
//   render() {
//     const { showAD } = this.props; // props로부터 showAD 값을 가져옴

//     if (!showAD) {
//       return null; // 광고를 표시하지 않음
//     }

//     return (
//       <img
//         src="/images/ad-banner.svg" // img 폴더에 배너 이미지 추가
//         alt="광고 배너"
//       />
//     );
//   }
// }

// export default Ad;

import React from 'react';
import adPath from '../images/adBanner.svg'

export default function Ad({ showAd }) {
  if (!showAd) {
    return null; // 광고를 표시하지 않음
  }

  return (
    <div>
      <img
      className='adImg'
      src={adPath} // img 폴더에 배너 이미지 추가
      alt="광고 배너"
      />
    </div>

  );
}