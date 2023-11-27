import React from 'react';
import adPath from '../images/adBanner.svg';

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
