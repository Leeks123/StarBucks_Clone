import React, { useEffect } from "react";
import styled from "styled-components";
import { NaverMap } from 'react-naver-maps';
import dotenv from "dotenv";

import SearchBox from "./FindStorePage_SearchBox";
import CafeMarker from "./FindStorePage_CafeMarker"

dotenv.config();

const StyledContents = styled.div`
  height: 150vh;
  padding-top: 120px;
  @media (max-width: 950px) {
    padding-top: 70px;
  }
`;
const FindStorePage = () => {
  const navermaps = window.naver.maps;

  // fetch("/map-geocode/v2/geocode?query=분당구 불정로 6&coordinate=127.1054328,37.3595963", {
  //   headers: {
  //     "X-Ncp-Apigw-Api-Key": process.env.REACT_APP_Map_Api_Key,
  //     "X-Ncp-Apigw-Api-Key-Id": process.env.REACT_APP_Map_Api_Key_Id
  //   }
  // }).then((res)=> {
  //   console.log(res);});

  useEffect(()=>{
    navermaps.Service.geocode({
      address: '불정로 6'
    }, function(status, response) {
      if (status !== navermaps.Service.Status.OK) {
          return alert('Something wrong!');
      }
      var result = response.result, // 검색 결과의 컨테이너
          items = result.items; // 검색 결과의 배열
          console.log(items);
    });
  },[])
  
  console.log("findStore component loaded");

  return (
    <StyledContents>
      <NaverMap 
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '100%', // 네이버지도 가로 길이
          height: '85vh' // 네이버지도 세로 길이
        }}
        defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
        defaultZoom={13} // 지도 초기 확대 배율
      >
        <CafeMarker />
      </NaverMap>
      <SearchBox/>
    </StyledContents>
  );
};

export default FindStorePage;
