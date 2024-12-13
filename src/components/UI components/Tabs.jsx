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
              if (props.disabled) return;
              if (props.category === tabItem.name) {
                props.setSelCategory("");
              } else {
                props.setSelCategory(tabItem.name);
              }
            }}
            className={` flex flex-col items-center bg-transparent text-gray-500 border-b-2 box-border ${
              props.disabled ? "" : "hover:text-black"
            } pb-3 whitespace-nowrap ${
              props.category === tabItem.name && !props.disabled
                ? "border-black text-black"
                : ""
            }`}
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
