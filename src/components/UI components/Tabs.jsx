import React from "react";

const Tabs = (props) => {
  return (
    <>
      <div className="flex gap-5 mt-6 text-base flex-nowrap overflow-auto">
        {props.tabItems.map((tabItem, index) => (
          <button key={index} className="bg-transparent text-sm text-gray-500 border-b-2 box-border focus:border-black focus:text-black pb-3 whitespace-nowrap">
            {tabItem.img ? (
              <img
                src={props.img}
                alt={tabItem.name + " icon"}
                height={24}
                width={24}
              />
            ) : (
              ""
            )}
            <span>{tabItem.name}</span>
          </button>
        ))}
      </div>
      <div className="bg-gray-300 h-0.5"></div>
    </>
  );
};

export default Tabs;
