import { configureStore, createSlice, current } from "@reduxjs/toolkit";


const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, //pending or done
    currentFetching: false,
  },
  reducers: {
    markfetchDone: (state) => {
       state.fetchDone=true;
    },
    markFetchingStarted: (state) => {
       state.currentFetching=true;
    },
    markFetchingFinished: (state) => {
       state.currentFetching=false;
    },
  },
});
export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
