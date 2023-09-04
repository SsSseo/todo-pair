// 중앙 데이터 관리소(store)를 설정하는 부분
import { combineReducers, createStore } from "redux";
import plans from '../modules/Plans'

const rootReducer = combineReducers({
  //모듈들이 객체 형태로 들어 갈 자리
  plans
})
const store = createStore(rootReducer)

export default store