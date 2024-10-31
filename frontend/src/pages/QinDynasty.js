import React from 'react';
import Map from '../components/Map';
import qindata from '../mapdata/qindata';

const QinDynasty = () => {
  return (
    <div>
      <Map mapData={qindata} />
    </div>
  );
};

export default QinDynasty;
