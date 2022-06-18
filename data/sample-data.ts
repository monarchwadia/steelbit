import { Component } from "steelbit/types";

const sampleData: Component[] = [
  {
    id: 1,
    type: "box",
    direction: "horizontal",
    width: "auto",
    
    children: [
      {
        id: 2,
        type: "text",
        size: "24px",
        color: "rgba(255,0,0,1)",
        value: "Hello"
      },
      {
        id: 3,
        type: "box",
        direction: "vertical",
        width: "24px"
      },
      {
        id: 4,
        type: "text",
        size: "24px",
        color: "rgba(0,255,0,1)",
        value: "World"
      }
    ]
  },
  {
    id: 5,
    type: "button",
    size: "24px",
    backgroundColor: "rgba(0,0,0,1)",
    onClick: `(e) => {
      e.preventDefault();
      alert("clicked!");
    }`,
    children: [{
      id: 6,
      type: "text",
      size: "24px",
      color: "rgba(255,255,255,1)",
      value: "ClickMe!"
    }]
  }
]

export default sampleData;