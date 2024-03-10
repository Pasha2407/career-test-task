import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
      }}
    >
      <ThreeDots
        height={80}
        width={80}
        radius={9}
        color="#3470FF"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};
