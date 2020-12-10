/* 액션 타입 만들기 */
const SET_STATE = 'mapMarker/SET_STATE';
const SET_GEOCODES = 'mapMarker/SET_GEOCODES';
const SET_CENTER = 'mapMarker/SET_CENTER';
const SET_STORELIST_CLICKED = 'mapMarker/SET_STORELIST_CLICKED';

/* 액션 생성함수 만들기 */
export const setState = (city,district,filteredData) => ({ type: SET_STATE, city,district,filteredData });
export const updateGeoCodes = (geocodes) => ({type:SET_GEOCODES,geocodes})
export const setCenter = (pos)=>({type:SET_CENTER,pos})
export const setStoreListClicked = (store)=>({type:SET_STORELIST_CLICKED,store})

/* 초기 상태 선언 */
const initialState = {
  city : "",
  district : "",
  filteredData : [],
  geoCodes : [],
  center : { lat: 37.554722, lng: 126.970833 },
  clicked : "",
};

/* 리듀서 선언 */
export default function mapMarker(state = initialState, action) {
  switch (action.type) {
    case SET_STATE:
      return {
        ...state,
        city : action.city,
        district : action.district,
        filteredData : action.filteredData
      };
    case SET_GEOCODES:
      return {
        ...state,
        geoCodes : action.geocodes
      }
    case SET_CENTER:
      return {
        ...state,
        center : action.pos
      }
    case SET_STORELIST_CLICKED:
      return {
        ...state,
        clicked : action.store
      }
    default:
      return state;
  }
}