import React from 'react';
import { Marker } from 'react-naver-maps';
import Desc from "./FindStorePage_MarkerDesc";

const FindStorePage_CafeMarker = () => {
    const navermaps = window.naver.maps;
    return (
        <Marker
        key={1}
        position={navermaps.LatLng(37.551229, 126.988205)}
        animation={2}
        onClick={() => {alert('여기는 N서울타워입니다.');}}
      />
    );
};

export default FindStorePage_CafeMarker;