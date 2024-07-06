import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { itemsAction } from '../Store/itemSlice';
import { fetchStatusAction } from '../Store/fetchStatusSlice';

export const FetchItems = () => {
 const fetchStatus = useSelector((store) => store.fetchStatus);
 const dispatch = useDispatch();

  useEffect(() => {
   if(fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

   dispatch(fetchStatusAction.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({items}) => {
        dispatch(fetchStatusAction.markFetchingFinished());
        dispatch(fetchStatusAction.markfetchDone());
        dispatch(itemsAction.addInitialItems(items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <div>
     
    </div>
  );
}
