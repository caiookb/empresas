import {combineReducers} from 'redux';
import CompanyReducer from './CompanyReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  companies: CompanyReducer,
  user: UserReducer,
});
