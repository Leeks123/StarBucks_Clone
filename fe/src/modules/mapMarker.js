/* 액션 타입 만들기 */
const SET_STATE = 'mapMarker/SET_STATE';
const SET_GEOCODES = 'mapMarker/SET_GEOCODES'

/* 액션 생성함수 만들기 */
export const setState = (city,district,filteredData) => ({ type: SET_STATE, city,district,filteredData });
export const updateGeoCodes = (geocodes) => ({type:SET_GEOCODES,geocodes})

/* 초기 상태 선언 */
const initialState = {
  city : "",
  district : "",
  filteredData : [],
  geoCodes : [],
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
    default:
      return state;
  }
}