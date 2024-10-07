import React from "react";

const Tabs = (props) => {
  return (
    <>
      <div
        className={`flex gap-5 mt-6 flex-nowrap ${
          props.tabItems[0].img ? "justify-start sm:justify-center" : ""
        } overflow-auto`}
      >
        {props.tabItems.map((tabItem, index) => (
          <button
            key={index}
            onClick={() => {
              props.setSelCategory(tabItem.name);
              console.log("Selected Category: " + tabItem.name);
            }}
            className="flex flex-col items-center bg-transparent text-gray-500 border-b-2 box-border focus:border-black focus:text-black hover:text-black pb-3 whitespace-nowrap"
          >
            {tabItem.img ? (
              <img
                src={tabItem.img}
                alt={tabItem.name + " icon"}
                height={20}
                width={20}
              />
            ) : (
              ""
            )}
            <span className="text-xs">{tabItem.name}</span>
          </button>
        ))}
      </div>
      <div className="bg-gray-300 h-0.5"></div>
    </>
  );
};

export default Tabs;
