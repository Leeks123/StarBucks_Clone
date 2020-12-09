import React, { useEffect,useState } from "react";
import styled from "styled-components";
import { NaverMap } from 'react-naver-maps';
import dotenv from "dotenv";

import SearchBox from "./FindStorePage_SearchBox";
import CafeMarker from "../Pages/FindStorePage_CafeMarker";

import { useSelector,useDispatch } from "react-redux";
import { updateGeoCodes } from "../../modules/mapMarker";

dotenv.config();

const StyledContents = styled.div`
  height: 100vh;
  padding-top: 120px;
  @media (max-width: 950px) {
    padding-top: 70px;
  }
`;

const FindStorePage = () => {
  const navermaps = window.naver.maps;
  const pinList = useSelector(state => state.mapMarker);

  const dispatch = useDispatch();

  const [dragged,setDragged] = useState(false);
  const [geoCodes,setGeoCodes] = useState(pinList.geoCodes);
  const [reduxUpdate,setReduxUpdate] = useState("");
  const [forRender,setForRender] = useState(0);
  const [center,setCenter] = useState({ lat: 37.554722, lng: 126.970833 });

  let pos = []
  const update = (item)=>{
    let x = Number.parseFloat(item.x);
    let y = Number.parseFloat(item.y);
    item.x = y;
    item.y = x;
    return pos.push(item)
  };
  const getGeoCode = (address)=>{
    navermaps.Service.geocode({
      address: address
    }, function(status, response) {
      if (status !== navermaps.Service.Status.OK) {
          return alert('Something wrong!');
      }
      var result = response.result, // 검색 결과의 컨테이너
          items = result.items; // 검색 결과의 배열
          update(items[0].point)
    });
  }

  useEffect(()=>{
    pinList.filteredData.forEach((item)=>{
      getGeoCode(item.address);
    })
    console.log("useEffect",pos,reduxUpdate);
    dispatch(updateGeoCodes(pos));

    setGeoCodes(pos); 
  },[reduxUpdate])

  const DragFn = (state)=>{
    setDragged(state);
  }

  const pinRender = (i)=>{
    setForRender((i+1)%10);
  }

  console.log("findPage rendered",reduxUpdate,geoCodes,dragged,forRender)
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
        {geoCodes.map((pos,i)=>{
         return  <CafeMarker key={i} dragged={dragged} DragFn={DragFn} pos={pos} id={i} />
        })}
        
      </NaverMap>
      <SearchBox reduxUpdate={setReduxUpdate} />
    </StyledContents>
  );
};

export default FindStorePage;
