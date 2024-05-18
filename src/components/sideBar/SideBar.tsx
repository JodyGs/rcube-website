import React from "react";
import { CATEGORIES } from "~/utils/categories";
import { uid } from "react-uid";

export default function SideBar() {
  return (
    <div className="min-x-[216px] absolute h-full space-y-4 bg-custom-grey-800">
      {CATEGORIES.map(({ title, cards }) => (
        <div key={uid(title)}>
          <h5 className="px-8 py-6 font-satoshi text-xs font-bold uppercase text-gray-300">
            {title}
          </h5>
          {cards.map(({ strategyName }) => (
            <p
              key={strategyName}
              className="px-8 py-4 text-gray-100 hover:bg-custom-grey-700 hover:text-white"
            >
              {strategyName}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
