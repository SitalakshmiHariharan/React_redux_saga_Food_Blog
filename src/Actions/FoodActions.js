export const FETCH_FOODS_BEGIN   = 'FETCH_FOODS_BEGIN';
export const FETCH_FOODS_SUCCESS = 'FETCH_FOODS_SUCCESS';
export const FETCH_FOODS_FAILURE = 'FETCH_FOODS_FAILURE';

export const fetchFoodsBegin = () => ({
    type: FETCH_FOODS_BEGIN
  });
 
 export const fetchFoodsSuccess = foods => ({
   type: FETCH_FOODS_SUCCESS,
   payload:  foods 
 });
 
 export const fetchFoodsFailure = error => ({
   type: FETCH_FOODS_FAILURE,
   payload: { error }
 });
