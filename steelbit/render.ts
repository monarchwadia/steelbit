import { Component } from "./types";

const render = (componentTree: Component[], out: HTMLElement) => {
  componentTree.forEach(component => {
    let elem;
    console.log(component);

    switch (component.type) {
      case "box":
        console.log(component);
        elem = document.createElement("div");
        elem.style.display = "flex";
        elem.style.flexDirection = component.direction || "vertical";
        elem.style.width = component.width || "auto";

        break;
      case "text":
        elem = document.createElement("span");
        elem.style.fontSize = component.size || "9px";
        elem.style.color = component.color || "rgba(0,0,0,1)";
        elem.innerText = component.value || "";

        break;
      
      case "button":
        elem = document.createElement("button");
        elem.style.fontSize = component.size || "9px";
        elem.style.backgroundColor = component.backgroundColor || "rgba(255,255,255,1)";
        elem.onclick = component.onClick ? eval(component.onClick) : undefined;
        break;
      
      default:
        elem = document.createElement("div");
        break;
    }

    out.appendChild(elem);

    if (component.children) {
      render(component.children, elem);
    }
  })
}

export default render;