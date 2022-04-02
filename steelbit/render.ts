const render = (componentTree: any[], out: HTMLElement) => {
  componentTree.forEach(component => {
    let elem;
    console.log(component);

    switch (component.type) {
      case "box":
        elem = document.createElement("div");
        elem.style.display = "flex";
        elem.style.flexDirection = component.direction || "vertical";

        break;
      case "text":
        elem = document.createElement("span");
        elem.style.fontSize = component.size || 9;
        elem.style.color = component.color || "rgba(0,0,0,1)";
        elem.innerText = component.value || "";

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