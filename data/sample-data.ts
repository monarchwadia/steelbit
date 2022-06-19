import { Component } from "steelbit/types";

const sampleData: Component[] = [
  {
    id: 1,
    type: "div",
    props: {
      direction: "horizontal",
      width: "auto",
      children: [
        {
          id: 2,
          type: "p",
          props: {
            size: "24px",
            color: "rgba(255,0,0,1)",
            value: "Hello"
          }
        },
        {
          id: 3,
          type: "div",
          props: {
            direction: "vertical",
            width: "24px"
          }
        },
        {
          id: 4,
          type: "p",
          props: {
            size: "24px",
            color: "rgba(0,255,0,1)",
            value: "World"
          }
        }
      ]
    }
    
  },
  {
    id: 5,
    type: "button",
    props: {
      size: "24px",
      backgroundColor: "rgba(0,0,0,1)",
      onClick: `(e) => {
        e.preventDefault();
        alert("clicked!");
      }`,
      children: [{
        id: 6,
        type: "p",
        props: {
          size: "24px",
          color: "rgba(255,255,255,1)",
          value: "ClickMe!"
        }
      }]
    }
  }
]

export default sampleData;