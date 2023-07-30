import { combineReducers } from "redux";
import { todosReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";


const reducers = { todosReducer };

const rootReducer = combineReducers(reducers);

export const store = () => configureStore({ rootReducer });
