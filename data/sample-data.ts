const sampleData = [{
  id: 1,
  type: "box",
  direction: "horizontal",
  
  children: [
    {
      id: 2,
      type: "text",
      size: 12,
      color: "rgba(255,0,0,1)",
      value: "Hello"
    },
    {
      id: 3,
      type: "box",
      width: "12px",
      color: "rgba(0,0,0,0)"
    },
    {
      id: 4,
      type: "text",
      size: 12,
      color: "rgba(0,255,0,1)",
      value: "World"
    }
  ]
}]

export default sampleData;