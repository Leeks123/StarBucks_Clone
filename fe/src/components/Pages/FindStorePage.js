import React, { useEffect,useState } from "react";
import styled from "styled-components";
import { NaverMap } from 'react-naver-maps';
import dotenv from "dotenv";

import SearchBox from "./FindStorePage_SearchBox";
import CafeMarker from "./FindStorePage_CafeMarker";

import { useSelector } from "react-redux";
import { updateGeoCodes } from "../../modules/mapMarker";
import  { useDispatch } from "react-redux";

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
  // const [geoCodes,setGeoCodes] = useState([]);
  const [reduxUpdate,setReduxUpdate] = useState("");
  const [loaded,setLoaded] = useState(false);

  let pos = []
  const update = (item)=>pos.push(item);
  useEffect(()=>{
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

    pinList.filteredData.forEach((item)=>{
      getGeoCode(item.address);
      // console.log("geoCode",pos);
    })

    console.log("useEffect",pos);
    dispatch(updateGeoCodes(pos));
  },[reduxUpdate])

  // useEffect(()=>{
  //   if(pos.length===pinList.filteredData.length){
  //     setLoaded(true);
  //   }
  // },[reduxUpdate])

  useEffect(()=>{
    setLoaded(!loaded);
  },[pinList.geoCodes])

  const DragFn = (state)=>{
    setDragged(state);
  }

  console.log("rendered",pinList.geoCodes);
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
        onDragend={(e)=>{setDragged(true)}}
      >
        
        {pinList.geoCodes.map((item,i)=>(
          <CafeMarker key={i} dragged={dragged} DragFn={DragFn} pos={item}  />
        ))}
        
      </NaverMap>
      <SearchBox reduxUpdate={setReduxUpdate}/>
    </StyledContents>
  );
};

export default FindStorePage;
