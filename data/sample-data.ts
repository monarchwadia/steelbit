import { Component } from "steelbit/types";

const sampleData: Component[] = [
  {
    id: 1,
    type: "div",
    style: {
      direction: "horizontal",
      width: "auto",
    },
    children: [
      {
        id: 2,
        type: "p",
        style: {
          size: "24px",
          color: "rgba(255,0,0,1)",
        },
        children: [
          "Hello, World!"
        ]
      },
      {
        id: 3,
        type: "div",
        style: {
          direction: "vertical",
          width: "24px"
        }
      },
      {
        id: 4,
        type: "p",
        style: {
          size: "24px",
          color: "rgba(0,0,255, 1)"
        },
        children: [
          "0 Clicks"
        ]
      }
    ]
  },
  {
    id: 5,
    type: "button",
    style: {
      size: "24px",
      backgroundColor: "rgba(0,0,0,1)",
      color: "white"
    },
    on: {
      click: `(e) => {
        e.preventDefault();
        alert("clicked!");
      }`
    },
    children: [
      "Click Me!"
    ]
  }
]

export default sampleData;