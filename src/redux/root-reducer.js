import { combineReducers } from "@reduxjs/toolkit";

import contactsReducer from './contacts/contatcs-slice';
import filterReducer from "./filter/filter-slice";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
