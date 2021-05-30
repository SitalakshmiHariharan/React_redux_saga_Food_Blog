import {
   FETCH_FOODS_BEGIN,
   FETCH_FOODS_SUCCESS,
   FETCH_FOODS_FAILURE
 } from '../Actions/FoodActions';
 
 const initialState = {
   items: [],
   loading: false,
   error: null
 };
 
 export default function foodReducer(state = initialState, action) {
   switch(action.type) {
     case FETCH_FOODS_BEGIN:   
       return { ...state,loading: true,error: null}; 
     case FETCH_FOODS_SUCCESS:       
       return {...state, loading: false,items: action.payload}; 
     case FETCH_FOODS_FAILURE:
       return {...state,loading: false, error: action.payload.error, items: []}; 
     default: 
       return state;
   }
 }