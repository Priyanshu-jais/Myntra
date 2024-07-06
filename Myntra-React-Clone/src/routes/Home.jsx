import React from "react";
import { HomeItem } from "../Components/HomeItem";
import { useSelector } from "react-redux";
export const Home = () => {
  const items = useSelector((store) => store.items);
  return (
    <div>
      <main>
        <div className="items-container">
          {items.map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
};
