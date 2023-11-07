// import React from 'react';
// import Ad from './Ad';

// export default function AdPage() {
//   return (
//     <div>
//       <Ad showAd={true} /> {/* 광고를 표시하도록 설정 */}
//     </div>
//   );
// }


import React, { Component } from 'react';
import Ad from './Ad';

class AdPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAd: true, // 초기에 광고를 표시
    };
  }

  // 광고 표시 여부를 토글하는 메서드
  handleToggleClick = () => {
    this.setState((prevState) => ({
      showAd: !prevState.showAd,
    }));
  };

  render() {
    return (
      <div>
        {this.state.showAd && <Ad showAd={true} />}
        <button onClick={this.handleToggleClick}>
          {this.state.showAd ? '광고 숨기기' : '광고 보기'}
        </button>
      </div>
    );
  }
}

export default AdPage;
