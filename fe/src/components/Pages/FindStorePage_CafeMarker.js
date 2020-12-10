import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCenter } from "../../modules/mapMarker";
import { Marker } from 'react-naver-maps';
import Desc from "./FindStorePage_MarkerDesc";

import general from "../../images/findStore/pin_general.png";
import dt from "../../images/findStore/pin_general_DT.png";
import reserve from "../../images/findStore/pin_reserve.png";

  
const FindStorePage_CafeMarker = ({dragged,DragFn,item,id}) => {

    const [type,setType] = useState("normal")
    const [descPos,setDescPos] = useState(null);
    const [pos,setPos] = useState({});

    const dispatch = useDispatch();
    const navermaps = window.naver.maps;

    const update = (item)=>{
        let x = Number.parseFloat(item.x);
        let y = Number.parseFloat(item.y);
        item.x = y;
        item.y = x;
        setPos(item);
        if(id===1){
            dispatch(setCenter({lat:item.x,lng:item.y}));
        }
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
        setType(item.type);
        getGeoCode(item.address);
    },[item])


    // console.log("marker",item,type,pos);

    return (      
            <>
                {descPos!==null && 
                    <Desc 
                        position={descPos} PosFn={setDescPos} 
                        dragged={dragged} DragFn={DragFn} 
                        desc={item} 
                    />}
            <Marker
                position={new navermaps.LatLng(pos.x, pos.y)}
                animation={0}
                onClick={(e) => {console.log("clicked",[e.domEvent.x,e.domEvent.y]);setDescPos([e.domEvent.x,e.domEvent.y])}}
                icon={type==="dt"?dt:type==="reserve"?reserve:general}
            />
            </>
        );
};

export default FindStorePage_CafeMarker;