import React, { useState } from "react";
import styled from "styled-components";
import { NaverMap } from 'react-naver-maps';
import dotenv from "dotenv";

import SearchBox from "./FindStorePage_SearchBox";
import CafeMarker from "../Pages/FindStorePage_CafeMarker";

import { useSelector } from "react-redux";

dotenv.config();

const StyledContents = styled.div`
  height: 100vh;
  padding-top: 120px;
  @media (max-width: 950px) {
    padding-top: 70px;
  }
`;

const FindStorePage = () => {
  const pinList = useSelector(state => state.mapMarker);

  const [dragged,setDragged] = useState(false);
  const [reduxUpdate,setReduxUpdate] = useState("");
  const [forRender,setForRender] = useState(0);
  const [center,setCenter] = useState(pinList.center);

  const DragFn = (state)=>{
    setDragged(state);
  }

  const pinRender = (i)=>{
    setForRender((i+1)%10);
    setCenter(pinList.center);
  }

  console.log("findPage rendered",reduxUpdate,dragged,forRender)
  return (
    <StyledContents>
      <NaverMap 
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '100%', // 네이버지도 가로 길이
          height: '85vh' // 네이버지도 세로 길이
        }}
        center={center} // 지도 초기 위치
        defaultZoom={13} // 지도 초기 확대 배율
        onDragend={(e)=>{setDragged(true);pinRender(forRender+1)}}
      >
        {pinList.filteredData.map((item,i)=>{
         return  <CafeMarker key={i} dragged={dragged} DragFn={DragFn} item={item} id={i} />
        })}
        
      </NaverMap>
      <SearchBox reduxUpdate={setReduxUpdate} />
    </StyledContents>
  );
};

export default FindStorePage;
