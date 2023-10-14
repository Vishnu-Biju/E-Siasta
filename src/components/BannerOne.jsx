import React from 'react';
import Banner1 from '../assets/Banner05.png';

const BannerOne = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={Banner1} alt="Banner01" style={{ width: '100vw', marginTop: '95px' }} />
    </div>
  );
};

export default BannerOne;
