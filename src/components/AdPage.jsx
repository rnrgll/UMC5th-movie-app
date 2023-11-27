import React, { useState } from 'react';
import Ad from './Ad';

export default function AdPage() {
  const [showAd, setShowAd] = useState(true);

  const handleToggleClick = () => {
    setShowAd((prevShowAd) => !prevShowAd);
  };

  return (
    <div>
      <Ad showAd={showAd} />
      <button onClick={handleToggleClick}>
        {showAd ? '광고 숨기기' : '광고 보기'}
      </button>
    </div>
  );
}
