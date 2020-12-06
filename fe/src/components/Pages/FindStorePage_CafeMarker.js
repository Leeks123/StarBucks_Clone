import React, { useState } from 'react';
import { Marker } from 'react-naver-maps';
import Desc from "./FindStorePage_MarkerDesc";

import general from "../../images/findStore/pin_general.png";
import dt from "../../images/findStore/pin_general.png";
import reserve from "../../images/findStore/pin_general.png";

  
const FindStorePage_CafeMarker = ({dragged,DragFn,pos}) => {
    const [descPos,setDescPos] = useState(null);
    const navermaps = window.naver.maps;
    console.log(pos.x,pos.y);

    return (      
            <>
                {descPos!=null && <Desc position={descPos} PosFn={setDescPos} dragged={dragged} DragFn={DragFn}/>}
            <Marker
                key={1}
                position={navermaps.LatLng(Number.parseFloat(pos.y), Number.parseFloat(pos.x))}
                // position={navermaps.LatLng(37.3595704, 127.10539)}
                animation={0}
                onClick={(e) => {setDescPos([e.domEvent.x,e.domEvent.y])}}
                // icon={type==="dt"?dt:type==="reserve"?reserve:general}
                icon={dt}
            />
            </>
        );
};

export default FindStorePage_CafeMarker;