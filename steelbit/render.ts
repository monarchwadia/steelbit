import { Component } from "./types";

const render = (componentTree: Component[], out: HTMLElement) => {
  componentTree.forEach(component => {
    const elem = document.createElement(component.type);

    console.log(component);

    Object.entries(component.props)
      .filter(([key]) => key !== "children")
      .forEach(([key, val]) => {
        // @ts-ignore
        elem[key] = val;
      })

    out.appendChild(elem);

    if (component.props.children) {
      render(component.props.children, elem);
    }
  });
}

export default render;