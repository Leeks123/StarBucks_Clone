import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Marker } from 'react-naver-maps';
import Desc from "./FindStorePage_MarkerDesc";

import general from "../../images/findStore/pin_general.png";
import dt from "../../images/findStore/pin_general_DT.png";
import reserve from "../../images/findStore/pin_reserve.png";

  
const FindStorePage_CafeMarker = ({dragged,DragFn,pos,id}) => {
    const pinList = useSelector(state => state.mapMarker);
    const [type,setType] = useState("normal")
    const [descPos,setDescPos] = useState(null);

    const navermaps = window.naver.maps;

    useEffect(()=>{
        if(pinList.filteredData[id]!==undefined){
            setType(pinList.filteredData[id].type);
        }
    },[pinList]);
    console.log("marker rendered!!",pos,pinList.filteredData[id]);

    return (      
            <>
                {descPos!==null && 
                    <Desc 
                        position={descPos} PosFn={setDescPos} 
                        dragged={dragged} DragFn={DragFn} 
                        desc={pinList.filteredData[id]} 
                    />}
            <Marker
                position={new navermaps.LatLng(pos.x, pos.y)}
                animation={0}
                onClick={(e) => {console.log("clicked",[e.domEvent.x,e.domEvent.y]);setDescPos([e.domEvent.x,e.domEvent.y])}}
                icon={type==="dt"?dt:type==="reserve"?reserve:general}
                // icon={dt}
            />
            </>
        );
};

export default FindStorePage_CafeMarker;