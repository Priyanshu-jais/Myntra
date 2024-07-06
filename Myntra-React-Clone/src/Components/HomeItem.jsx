import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bagAction } from '../Store/BagSlice';
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export const HomeItem = ({item}) => {
  const dispatch = useDispatch();
  const bagItems = useSelector(store => store.bag);
  const elementFound=bagItems.indexOf(item.id)>=0;
  
  const handleAddToBAg =() => {
    dispatch(bagAction.addToBag(item.id));
  }
  const handleRemove =() => {
    dispatch(bagAction.removeToBag(item.id));
  }
  return (
    <div>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ? (
          <button
            type="button"
            className="btn-add-bag btn btn-danger"
            onClick={handleRemove}
          >
            Remove
            <MdDelete className="icon" />
          </button>
        ) : (
          <button
            type="button"
            className="btn-add-bag btn btn-success"
            onClick={handleAddToBAg}
          >
            <IoMdAddCircle className="icon" />
            Add to Bag
          </button>
        )}
      </div>
    </div>
  );
}
